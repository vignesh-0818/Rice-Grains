$ErrorActionPreference = "Stop"

$allPassed = $true

function Assert-Condition($condition, $passMsg, $failMsg) {
  if ($condition) {
    Write-Host "[PASS] $passMsg" -ForegroundColor Green
  } else {
    Write-Host "[FAIL] $failMsg" -ForegroundColor Red
    $script:allPassed = $false
  }
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " AgroGrains Text Encoding Verification Suite" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$htmlFiles = @(
  "index.html",
  "home-2.html",
  "products.html",
  "bulk-pricing.html",
  "pricing.html",
  "blog.html",
  "blog-details.html",
  "contact.html",
  "about.html"
)

# 1. Meta charset check
Write-Host "`n--- 1. Meta Charset Verification ---" -ForegroundColor Yellow
foreach ($fn in $htmlFiles) {
  $content = [System.IO.File]::ReadAllText($fn, [System.Text.Encoding]::UTF8)
  $hasCharset = $content -match '<meta\s+charset=["'']?UTF-8["'']?\s*\/?>'
  Assert-Condition $hasCharset "$($fn) has <meta charset='UTF-8'> in <head>" "$($fn) missing <meta charset='UTF-8'>"
}

# 2. Mojibake Detection across all files
Write-Host "`n--- 2. Mojibake Pattern Audit across HTML, JS, CSS ---" -ForegroundColor Yellow
$allFiles = Get-ChildItem -Include *.html,*.js,*.css -Recurse | Where-Object { $_.FullName -notmatch '\\scratch\\' }
$badChars = @([char]0x00E2, [char]0x00C3, [char]0x00C2, [char]0x00EF, [char]0xFFFD)

foreach ($f in $allFiles) {
  $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
  $hasBad = $false
  foreach ($bc in $badChars) {
    if ($content.IndexOf($bc) -ge 0) {
      $hasBad = $true
      break
    }
  }
  Assert-Condition (-not $hasBad) "$($f.Name) is 100% free of mojibake" "$($f.Name) contains mojibake characters!"
}

# 3. Exact String Verification
Write-Host "`n--- 3. Specific Requirement Checks ---" -ForegroundColor Yellow

$dash = [char]0x2013 # –
$bullet = [char]0x2022 # •
$emdash = [char]0x2014 # —

# Check Home Dropdown labels across all HTML files
foreach ($fn in $htmlFiles) {
  $content = [System.IO.File]::ReadAllText($fn, [System.Text.Encoding]::UTF8)
  $hasHome1 = $content.Contains("Home Page 1 $dash General Wholesale")
  $hasHome2 = $content.Contains("Home Page 2 $dash Trading")
  Assert-Condition ($hasHome1 -and $hasHome2) "$($fn) - Home dropdown uses proper en-dash ($dash)" "$($fn) - Home dropdown text mismatch"
}

# Check Bulk Pricing and Pricing tiers
$pricingFiles = @("bulk-pricing.html", "pricing.html")
foreach ($pfn in $pricingFiles) {
  $pContent = [System.IO.File]::ReadAllText($pfn, [System.Text.Encoding]::UTF8)
  $hasTier1 = $pContent.Contains("Tier 1 $bullet Palletized Wholesale")
  $hasTier2 = $pContent.Contains("Tier 2 $bullet Full Truckload (FTL)")
  $hasTier3 = $pContent.Contains("Tier 3 $bullet Container / Rake Supply")
  Assert-Condition ($hasTier1 -and $hasTier2 -and $hasTier3) "$($pfn) - Tiers 1, 2, 3 use proper bullet symbol ($bullet)" "$($pfn) - Tiers missing bullet symbol"
}

# Check Contact Us hours
$contactContent = [System.IO.File]::ReadAllText("contact.html", [System.Text.Encoding]::UTF8)
$hasContactHours = $contactContent.Contains("Monday $dash Saturday: 08:00 $dash 19:00 IST / EST")
Assert-Condition $hasContactHours "contact.html - Trading hours use proper en-dash ($dash)" "contact.html - Trading hours mismatch"

# Check Home 2 transit badges
$h2Content = [System.IO.File]::ReadAllText("home-2.html", [System.Text.Encoding]::UTF8)
$hasTransitBadges = $h2Content.Contains("4${dash}6 Days Transit") -and $h2Content.Contains("18${dash}22 Days Transit")
Assert-Condition $hasTransitBadges "home-2.html - Transit badges use proper en-dash ($dash)" "home-2.html - Transit badges mismatch"

# Check Index quotes and dispatches
$indexContent = [System.IO.File]::ReadAllText("index.html", [System.Text.Encoding]::UTF8)
$hasIndexDispatches = $indexContent.Contains("within 24${dash}48 hours")
$hasIndexQuote = $indexContent.Contains("cleaning is immaculate${emdash}zero broken grain complaints")
Assert-Condition ($hasIndexDispatches -and $hasIndexQuote) "index.html - Dispatches and testimonials use proper en-dash and em-dash" "index.html - Mismatch in dispatches or quote"

# Check js/products.js modal title
$prodJsContent = [System.IO.File]::ReadAllText("js/products.js", [System.Text.Encoding]::UTF8)
$hasProdModalTitle = $prodJsContent.Contains("Technical Specifications") -and $prodJsContent.Contains($dash)
Assert-Condition $hasProdModalTitle "js/products.js - Modal title uses proper en-dash ($dash)" "js/products.js - Modal title mismatch"

Write-Host "`n==========================================================" -ForegroundColor Cyan
if ($allPassed) {
  Write-Host " ALL ENCODING CHECKS PASSED WITH 100% SUCCESS!" -ForegroundColor Green
  Write-Host "==========================================================" -ForegroundColor Cyan
} else {
  Write-Host " SOME CHECKS FAILED." -ForegroundColor Red
  Write-Host "==========================================================" -ForegroundColor Cyan
  exit 1
}

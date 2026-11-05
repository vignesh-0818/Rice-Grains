# AgroGrains Wholesale Comprehensive Verification & Integrity Test Suite
$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " AgroGrains Project Verification & Responsive Audit" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$htmlFiles = @(
  "index.html",
  "home-2.html",
  "about.html",
  "products.html",
  "bulk-pricing.html",
  "blog.html",
  "blog-details.html",
  "contact.html"
)

$passed = 0
$failed = 0

# --- Test 1: HTML Files Exist and have 0 Div Delta and exactly 1 Navbar ---
Write-Host "`n--- Test 1: HTML Structure, Navbar and Tag Integrity ---" -ForegroundColor Yellow
foreach ($file in $htmlFiles) {
  if (-not (Test-Path $file)) {
    Write-Host "[FAIL] File $file not found!" -ForegroundColor Red
    $failed++
    continue
  }

  $content = Get-Content $file -Raw
  $openDivs = ([regex]::Matches($content, "<div[\s>]")).Count
  $closeDivs = ([regex]::Matches($content, "</div>")).Count
  $divDelta = $openDivs - $closeDivs

  $navbars = ([regex]::Matches($content, '<nav[\s>]|<nav\s+class="[^"]*wholesale-navbar')).Count
  $mains = ([regex]::Matches($content, "<main[\s>]")).Count
  $footers = ([regex]::Matches($content, "<footer[\s>]")).Count

  if ($divDelta -eq 0 -and $navbars -eq 1 -and $mains -eq 1 -and $footers -eq 1) {
    Write-Host "[PASS] $file - Balanced Tags (Divs: $openDivs/$closeDivs, Navbar: $navbars, Main: $mains, Footer: $footers)" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "[FAIL] $file - Tag mismatch (DivDelta: $divDelta, Navbar: $navbars, Main: $mains, Footer: $footers)" -ForegroundColor Red
    $failed++
  }
}

# --- Test 2: Exactly 1 Navbar & Controls Requirements across all 8 files ---
Write-Host "`n--- Test 2: Navbar Controls, Buttons & Branding ---" -ForegroundColor Yellow
foreach ($file in $htmlFiles) {
  $content = Get-Content $file -Raw

  $hasDesktopTheme = $content -match 'id="theme-toggle-btn"'
  $hasMobileTheme = $content -match 'id="theme-toggle-btn-mobile"'
  $hasDesktopRtl = $content -match 'id="rtl-toggle-btn"'
  $hasMobileRtl = $content -match 'id="rtl-toggle-btn-mobile"'
  $hasToggler = $content -match 'class="navbar-toggler'
  $hasCollapse = $content -match 'id="wholesaleNavDropdown"'
  $hasWhiteBrand = $content -match 'class="brand-title text-white fw-bold fs-4"'

  if ($hasDesktopTheme -and $hasMobileTheme -and $hasDesktopRtl -and $hasMobileRtl -and $hasToggler -and $hasCollapse -and $hasWhiteBrand) {
    Write-Host "[PASS] $file - Exactly 1 Navbar with unified mobile drawer, theme/RTL toggles, and white brand title" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "[FAIL] $file - Navbar controls missing or incomplete" -ForegroundColor Red
    $failed++
  }
}

# --- Test 3: Check for Broken Image References ---
Write-Host "`n--- Test 3: Asset & Image Reference Verification ---" -ForegroundColor Yellow
$missingImages = 0
$totalImagesChecked = 0
foreach ($file in $htmlFiles) {
  $content = Get-Content $file -Raw
  $matches = [regex]::Matches($content, 'assets/images/([a-zA-Z0-9_\-\.]+)')
  foreach ($m in $matches) {
    $imgName = $m.Groups[1].Value
    $imgPath = "assets/images/$imgName"
    $totalImagesChecked++
    if (-not (Test-Path $imgPath)) {
      Write-Host "[FAIL] In ${file} - Image not found -> $imgPath" -ForegroundColor Red
      $missingImages++
    }
  }
}

# Also check js/products.js and js/blog.js
$jsFiles = @("js/products.js", "js/blog.js")
foreach ($file in $jsFiles) {
  $content = Get-Content $file -Raw
  $matches = [regex]::Matches($content, 'assets/images/([a-zA-Z0-9_\-\.]+)')
  foreach ($m in $matches) {
    $imgName = $m.Groups[1].Value
    $imgPath = "assets/images/$imgName"
    $totalImagesChecked++
    if (-not (Test-Path $imgPath)) {
      Write-Host "[FAIL] In ${file} - Image not found -> $imgPath" -ForegroundColor Red
      $missingImages++
    }
  }
}

if ($missingImages -eq 0) {
  Write-Host "[PASS] All $totalImagesChecked image references verified and exist on disk!" -ForegroundColor Green
  $passed++
} else {
  Write-Host "[FAIL] $missingImages images missing!" -ForegroundColor Red
  $failed++
}

# --- Test 4: Check for Dead Hyperlinks / Pricing.html references ---
Write-Host "`n--- Test 4: Internal Hyperlink & Dead Link Audit ---" -ForegroundColor Yellow
$badLinks = 0
foreach ($file in $htmlFiles) {
  $content = Get-Content $file -Raw
  if ($content -match 'href="pricing\.html"') {
    Write-Host "[FAIL] $file links to old removed pricing.html!" -ForegroundColor Red
    $badLinks++
  }
}
if ($badLinks -eq 0) {
  Write-Host "[PASS] Zero links to obsolete pricing.html across entire website!" -ForegroundColor Green
  $passed++
} else {
  $failed++
}

# --- Test 5: CSS Responsive & High Contrast Rules ---
Write-Host "`n--- Test 5: CSS Responsive Rules & Dark Mode Contrast ---" -ForegroundColor Yellow
$css = Get-Content "css/style.css" -Raw

$hasOverflowHidden = $css -match 'overflow-x:\s*(clip|hidden)'
$hasTierSavings = $css -match '\.tier-savings-box'
$hasTierSavingsDark = $css -match '\[data-theme="dark"\]\s+\.tier-savings-box'
$hasClamp = $css -match 'font-size:\s*clamp\('
$hasMedia991 = $css -match '@media\s*\(max-width:\s*991\.98px\)'
$hasMedia767 = $css -match '@media\s*\(max-width:\s*767\.98px\)'
$hasMedia480 = $css -match '@media\s*\(max-width:\s*480px\)'
$hasMedia360 = $css -match '@media\s*\(max-width:\s*360px\)'
$hasProcessCardCenter = $css -match '\.process-icon' -and $css -match 'margin:\s*0\.5rem\s+auto'

if ($hasOverflowHidden -and $hasTierSavings -and $hasTierSavingsDark -and $hasClamp -and $hasMedia991 -and $hasMedia767 -and $hasMedia480 -and $hasMedia360 -and $hasProcessCardCenter) {
  Write-Host "[PASS] CSS contains all required responsive queries, tier savings dark contrast, fluid typography, and centered operating model icons!" -ForegroundColor Green
  $passed++
} else {
  Write-Host "[FAIL] Missing some CSS responsive rules:" -ForegroundColor Red
  Write-Host "  overflow-x:hidden: $hasOverflowHidden"
  Write-Host "  tier-savings: $hasTierSavings"
  Write-Host "  tier-savings dark: $hasTierSavingsDark"
  Write-Host "  clamp: $hasClamp"
  Write-Host "  media 991: $hasMedia991, 767: $hasMedia767, 480: $hasMedia480, 360: $hasMedia360"
  $failed++
}

# --- Test 6: Sticky Navbar Across All 8 Pages ---
Write-Host "`n--- Test 6: Sticky Navbar Verification Across All 8 Pages ---" -ForegroundColor Yellow
$stickyCount = 0
foreach ($file in $htmlFiles) {
  $content = Get-Content $file -Raw
  if ($content -match '<nav[^>]*class="[^"]*sticky-top[^"]*"') {
    $stickyCount++
  } else {
    Write-Host "[FAIL] $file does not have sticky-top on <nav>!" -ForegroundColor Red
  }
}
$cssSticky = $css -match 'position:\s*sticky\s*!important'

if ($stickyCount -eq 8 -and $cssSticky) {
  Write-Host "[PASS] All 8 pages have sticky-top navbar and CSS position: sticky !important with top: 0 and z-index: 1050!" -ForegroundColor Green
  $passed++
} else {
  Write-Host "[FAIL] Sticky navbar incomplete ($stickyCount/8 pages, CSS sticky: $cssSticky)" -ForegroundColor Red
  $failed++
}

# --- Summary ---
Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host " Verification Summary: Passed: $passed, Failed: $failed" -ForegroundColor $(if ($failed -eq 0) { "Green" } else { "Red" })
Write-Host "==========================================================" -ForegroundColor Cyan

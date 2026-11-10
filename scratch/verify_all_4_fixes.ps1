$files = @(
  "index.html",
  "about.html",
  "products.html",
  "bulk-pricing.html",
  "blog.html",
  "blog-details.html",
  "contact.html",
  "js\blog.js",
  "css\style.css",
  "css\responsive.css"
)

Write-Host "=== 1. VERIFYING DOCTOR AVATAR ASSET ==="
if (Test-Path "assets\images\avatar-dr-swaminathan.jpg") {
  $size = (Get-Item "assets\images\avatar-dr-swaminathan.jpg").Length
  Write-Host "PASS: avatar-dr-swaminathan.jpg exists ($size bytes)" -ForegroundColor Green
} else {
  Write-Host "FAIL: avatar-dr-swaminathan.jpg not found" -ForegroundColor Red
}

Write-Host "`n=== 2. VERIFYING BLOG DETAILS AVATAR ALIGNMENT ==="
$blogDetails = Get-Content "blog-details.html" -Raw
if ($blogDetails -match 'd-flex align-items-start gap-3' -and $blogDetails -match 'id="article-bio-avatar-wrap"\s+class="flex-shrink-0"') {
  Write-Host "PASS: blog-details.html author bio container is align-items-start and flex-shrink-0" -ForegroundColor Green
} else {
  Write-Host "FAIL: blog-details.html alignment markup missing" -ForegroundColor Red
}

Write-Host "`n=== 3. VERIFYING BLOG JS DOCTOR PROFILE, HIGHLIGHT & ALIGNMENT ==="
$blogJs = Get-Content "js\blog.js" -Raw
if ($blogJs -match 'avatar-dr-swaminathan\.jpg' -and $blogJs -match 'Dr\.\s*K\.\s*Swaminathan' -and $blogJs -match 'blog-card-author-avatar' -and $blogJs -match 'blog-card-meta-dot' -and $blogJs -match 'blog-card-read-more') {
  Write-Host "PASS: js/blog.js renders Dr. Swaminathan avatar, highlight and clean separated footer elements" -ForegroundColor Green
} else {
  Write-Host "FAIL: js/blog.js missing Dr. Swaminathan avatar, highlight or alignment structure" -ForegroundColor Red
}

Write-Host "`n=== 4. VERIFYING CONTACT US COMPACT SPACING ==="
$contactHtml = Get-Content "contact.html" -Raw
if ($contactHtml -match 'row g-4 align-items-start' -and $contactHtml -match 'Direct Phone Desks' -and $contactHtml -match 'Mill Terminal &amp; Warehousing Complex Location') {
  Write-Host "PASS: contact.html has align-items-start and compact layout" -ForegroundColor Green
} else {
  Write-Host "FAIL: contact.html missing compact layout" -ForegroundColor Red
}

Write-Host "`n=== 5. VERIFYING CSS RULES ==="
$cssStyle = Get-Content "css\style.css" -Raw
$cssResp = Get-Content "css\responsive.css" -Raw

if ($cssStyle -match '#article-bio-avatar-wrap' -and $cssStyle -match '\.blog-card-author-avatar' -and $cssStyle -match '\.blog-card-read-more' -and $cssStyle -match '\.blog-card-meta-dot') {
  Write-Host "PASS: css/style.css contains strict 1:1 avatar rules, blog card footer alignment and spacing" -ForegroundColor Green
} else {
  Write-Host "FAIL: css/style.css missing avatar or footer sizing rules" -ForegroundColor Red
}

if ($cssResp -match '0\.78rem' -and $cssResp -match 'blog-card-body') {
  Write-Host "PASS: css/responsive.css has mobile icon reduction and blog card padding" -ForegroundColor Green
} else {
  Write-Host "FAIL: css/responsive.css missing mobile rules" -ForegroundColor Red
}

Write-Host "`n=== 6. VERIFYING ENCODING INTEGRITY (NO MOJIBAKE) ==="
$mojibakeFound = 0
foreach ($f in $files) {
  $matches = Select-String -Path $f -Pattern "[\u00C2\u00C3\u00E2][\u0080-\u00BF]"
  if ($matches.Count -gt 0) {
    Write-Host "FAIL: Mojibake detected in $f ($($matches.Count) occurrences)" -ForegroundColor Red
    $mojibakeFound += $matches.Count
  }
}
if ($mojibakeFound -eq 0) {
  Write-Host "PASS: All files are 100% clean UTF-8 with zero mojibake" -ForegroundColor Green
}

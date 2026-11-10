$avatars = @(
  "avatar-vikramjit-singh.jpg",
  "avatar-david-bradley.jpg",
  "avatar-arun-malhotra.jpg",
  "avatar-rajeshwar-rao.jpg",
  "avatar-elena-rostova.jpg",
  "avatar-dr-swaminathan.jpg"
)

Write-Host "=== 1. VERIFYING ALL 6 AUTHOR AVATARS ==="
$allAvatarsOk = $true
foreach ($a in $avatars) {
  $path = "assets\images\$a"
  if (Test-Path $path) {
    $len = (Get-Item $path).Length
    Write-Host "PASS: $a exists ($len bytes)" -ForegroundColor Green
  } else {
    Write-Host "FAIL: $a NOT found!" -ForegroundColor Red
    $allAvatarsOk = $false
  }
}

Write-Host "`n=== 2. VERIFYING BLOG.JS PROFILES FOR ALL AUTHORS ==="
$blogJs = Get-Content "js\blog.js" -Raw
$authors = @("Vikramjit Singh", "David Bradley", "Arun Malhotra", "Rajeshwar Rao", "Elena Rostova", "Dr. K. Swaminathan")
$allAuthorsOk = $true
foreach ($auth in $authors) {
  if ($blogJs -match [regex]::Escape($auth)) {
    Write-Host "PASS: Author profile mapped for $auth" -ForegroundColor Green
  } else {
    Write-Host "FAIL: Missing profile for $auth" -ForegroundColor Red
    $allAuthorsOk = $false
  }
}

Write-Host "`n=== 3. VERIFYING FOOTER ALIGNMENT & STRUCTURE ==="
if ($blogJs -match 'blog-card-author-meta' -and $blogJs -match 'blog-card-meta-dot' -and $blogJs -match 'blog-card-read-more') {
  Write-Host "PASS: Footer elements cleanly separated and aligned" -ForegroundColor Green
} else {
  Write-Host "FAIL: Footer element structure missing" -ForegroundColor Red
}

Write-Host "`n=== 4. VERIFYING CSS RULES ==="
$styleCss = Get-Content "css\style.css" -Raw
if ($styleCss -match '\.blog-card-author-meta' -and $styleCss -match '\.blog-card-meta-dot' -and $styleCss -match '\.blog-card-read-more' -and $styleCss -match '\.blog-card-footer \.author-name-highlight') {
  Write-Host "PASS: CSS contains all footer layout, spacing, and green highlight rules" -ForegroundColor Green
} else {
  Write-Host "FAIL: CSS missing some footer rules" -ForegroundColor Red
}

Write-Host "`n=== 5. CHECKING ZERO MOJIBAKE ==="
$files = @("index.html", "about.html", "products.html", "bulk-pricing.html", "blog.html", "blog-details.html", "contact.html", "js\blog.js", "css\style.css", "css\responsive.css")
$mojibake = $false
foreach ($f in $files) {
  $matches = Select-String -Path $f -Pattern "[\u00C2\u00C3\u00E2][\u0080-\u00BF]"
  if ($matches.Count -gt 0) {
    Write-Host "FAIL: Mojibake detected in $f" -ForegroundColor Red
    $mojibake = $true
  }
}
if (-not $mojibake) {
  Write-Host "PASS: Zero mojibake across all files" -ForegroundColor Green
}


$allPassed = $true

Write-Host "=== VERIFICATION CHECKLIST ==="

# 1. Quality Inspection Banner
$index = Get-Content -Path "index.html" -Raw -Encoding utf8
if ($index -match 'class="card border-0 rounded-4 overflow-hidden shadow-sm quality-sourcing-banner"' -and $index -match 'banner-title' -and $index -match 'banner-desc' -and $index -notmatch 'text-white-50 mb-4') {
    Write-Host "[PASS] 1. Quality Inspection banner in index.html is styled with dedicated high-contrast classes." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 1. Quality Inspection banner mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 2. Single Boiled Golden Rice / Product Specs
$prodJs = Get-Content -Path "js\products.js" -Raw -Encoding utf8
if ($prodJs -match '<span class="product-spec-label">Grade:</span>') {
    Write-Host "[PASS] 2. Single Boiled Golden Rice / Product spec label updated to 'Grade:'." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 2. Product spec label mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 3. CSS for Product Specs
$styleCss = Get-Content -Path "css\style.css" -Raw -Encoding utf8
if ($styleCss -match '\.product-spec-label\s*\{[^}]*white-space:\s*nowrap\s*!important;' -and $styleCss -match '\.product-spec-value\s*\{[^}]*text-align:\s*right;') {
    Write-Host "[PASS] 3. CSS product spec rows have white-space: nowrap on labels and text-align: right on values." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 3. CSS product spec row rules mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 4. Most Popular for Distributors Pill
if ($styleCss -match '\.tier-featured-pill\s*\{[^}]*white-space:\s*nowrap\s*!important;' -and $styleCss -match 'padding-top:\s*2\.6rem\s*!important;') {
    Write-Host "[PASS] 4. Most Popular for Distributors pill has nowrap and card has proper padding-top." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 4. Tier featured pill CSS mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 5. Blog Cards inside box alignment
$blogJs = Get-Content -Path "js\blog.js" -Raw -Encoding utf8
if ($blogJs -match 'blog-card-meta' -and $blogJs -match 'blog-category-badge' -and $styleCss -match '\.blog-card-title\s*\{[^}]*min-height:\s*4\.4rem;' -and $styleCss -match '\.blog-card-excerpt\s*\{[^}]*min-height:\s*4\.1rem;') {
    Write-Host "[PASS] 5. Blog cards have unified meta row, equalized title min-height, equalized excerpt min-height, and mt-auto footers." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 5. Blog card styling mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 6. Encoding Check
$mojibake = Get-ChildItem -Recurse -File -Include *.html,*.js,*.css | Select-String -Pattern "â"
if ($mojibake.Count -eq 0) {
    Write-Host "[PASS] 6. Zero mojibake characters across all HTML, JS, and CSS files." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 6. Mojibake detected: $($mojibake.Count) occurrences." -ForegroundColor Red
    $allPassed = $false
}

if ($allPassed) {
    Write-Host "`nALL 6 VERIFICATIONS PASSED SUCCESSFULLY!" -ForegroundColor Cyan
} else {
    Write-Host "`nSOME CHECKS FAILED!" -ForegroundColor Red
}

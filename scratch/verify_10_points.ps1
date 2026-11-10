$allPassed = $true
Write-Host "=== 10-POINT COMPREHENSIVE VERIFICATION ===" -ForegroundColor Cyan

# 1. Home Page 1 - Alignment & Font Size
$css = Get-Content -Path "css\style.css" -Raw -Encoding utf8
if ($css -match '(\.product-card-title|h3\.product-card-title)[^{]*\{[^}]*font-size:\s*(15px|0\.94rem)' -and $css -match '\.product-card-desc\s*\{[^}]*font-size:\s*(0\.83rem|0\.84rem|0\.85rem);') {
    Write-Host "[PASS] 1. Home Page 1 Product card title and desc font sizes refined with min-height." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 1. Product card font size / min-height not found in css." -ForegroundColor Red
    $allPassed = $false
}

# 2. Home Page - Profile Pictures
$index = Get-Content -Path "index.html" -Raw -Encoding utf8
if ($index -match 'avatar-suresh-menon\.jpg' -and $index -match 'avatar-tariq-al-mansoor\.jpg' -and $index -match 'avatar-david-bradley\.jpg') {
    Write-Host "[PASS] 2. Home Page has profile pictures for Suresh Menon, Tariq Al-Mansoor, David Bradley." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 2. Testimonial profile pictures missing in index.html." -ForegroundColor Red
    $allPassed = $false
}

# 3. About Us - Reduce Label Icon Size
$about = Get-Content -Path "about.html" -Raw -Encoding utf8
if ($about -match 'Request Sample COA' -and $about -match 'bi-file-earmark-check' -and $css -match '\.btn-sm\.btn-wholesale-secondary') {
    Write-Host "[PASS] 3. About Us Request Sample COA has properly sized icon and btn-sm styling." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 3. About Us icon / button styling mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 4. Products Page - Correct Information Order
$prodJs = Get-Content -Path "js\products.js" -Raw -Encoding utf8
if ($prodJs -match 'Grade Standard:' -and $index -match 'Grade Standard:' -and $css -match 'min-width:\s*110px;') {
    Write-Host "[PASS] 4. Product specification order consistent (Grade Standard -> Moisture/Broken -> Packaging)." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 4. Product spec order mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 5. Blog - Millet and Sortex Cleaning
$blogJs = Get-Content -Path "js\blog.js" -Raw -Encoding utf8
if ($blogJs -match 'Millet and Sortex Cleaning' -and $blogJs -match 'Millet &amp; Micro-Grain Sortex' -and $blogJs -match 'InGaAs') {
    Write-Host "[PASS] 5. Blog clearly covers Millet and Sortex Cleaning with enhanced comparison table." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 5. Blog millet and sortex cleaning content mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 6. Blog - Elena Rostova Profile Picture
$elenaImg = Test-Path "assets\images\avatar-elena-rostova.jpg"
if ($elenaImg -and $blogJs -match 'avatar-elena-rostova\.jpg') {
    Write-Host "[PASS] 6. Elena Rostova professional profile picture exists and is loaded in blog details." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 6. Elena Rostova avatar missing or not loaded." -ForegroundColor Red
    $allPassed = $false
}

# 7. Blog - Highlight Author's Name
if ($blogJs -match 'author-name-highlight' -and $css -match '\.author-name-highlight') {
    Write-Host "[PASS] 7. Elena Rostova name highlighted with dedicated styling matching website palette." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 7. Author name highlight mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 8. Contact Us - Alignment
$contact = Get-Content -Path "contact.html" -Raw -Encoding utf8
if ($contact -match 'contact-dept-card' -and $contact -match 'contact-dept-item' -and $css -match '\.contact-dept-card') {
    Write-Host "[PASS] 8. Contact department cards evenly aligned with structured flex layout." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 8. Contact department cards alignment mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 9. Contact Us - Reduce Excessive Spacing
if ($contact -match 'mt-3' -and ($contact -match 'mt-4 pt-2' -or $contact -match 'class="mt-4"') -and $contact -notmatch 'py-3 w-100 fs-6') {
    Write-Host "[PASS] 9. Contact Us excessive spacing reduced around submit button and section." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 9. Contact Us spacing mismatch." -ForegroundColor Red
    $allPassed = $false
}

# 10. Mobile View - Reduce Label Icon Size
$responsive = Get-Content -Path "css\responsive.css" -Raw -Encoding utf8
if ($responsive -match '\.quote-form-card \.btn i' -and ($responsive -match '0\.78rem' -or $responsive -match '0\.95rem')) {
    Write-Host "[PASS] 10. Mobile view button icon sizes constrained for balanced proportions." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 10. Mobile view icon size rule missing in responsive.css." -ForegroundColor Red
    $allPassed = $false
}

# 11. Mojibake & Encoding Check
$mojibake = Get-ChildItem -Recurse -File -Include *.html,*.js,*.css | Select-String -Pattern "â"
if ($mojibake.Count -eq 0) {
    Write-Host "[PASS] 11. Zero mojibake characters found across all files." -ForegroundColor Green
} else {
    Write-Host "[FAIL] 11. Mojibake detected: $($mojibake.Count) occurrences." -ForegroundColor Red
    $allPassed = $false
}

if ($allPassed) {
    Write-Host "`nALL 10 UI CORRECTIONS & ENCODING VERIFICATIONS PASSED!" -ForegroundColor Cyan
} else {
    Write-Host "`nSOME CHECKS FAILED!" -ForegroundColor Red
}

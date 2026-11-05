$blogContent = Get-Content js/blog.js -Raw
$matches = [regex]::Matches($blogContent, 'id:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)"')
$images = @{}
$duplicates = 0

Write-Host "--- Checking Blog Image Uniqueness & Existence ---" -ForegroundColor Cyan
foreach ($m in $matches) {
    $id = $m.Groups[1].Value
    $img = $m.Groups[2].Value
    if (-not (Test-Path $img)) {
        Write-Host ("[FAIL] Image missing for " + $id + " -> " + $img) -ForegroundColor Red
        $duplicates++
    }
    if ($images.ContainsKey($img)) {
        Write-Host ("[FAIL] Duplicate image used for " + $id + " and " + $images[$img] + " -> " + $img) -ForegroundColor Red
        $duplicates++
    } else {
        $images[$img] = $id
        Write-Host ("[OK] " + $id + " -> " + $img) -ForegroundColor Green
    }
}

Write-Host "`nTotal Unique Blog Images: $($images.Count)" -ForegroundColor Cyan
if ($duplicates -eq 0 -and $images.Count -eq 15) {
    Write-Host "[SUCCESS] All 15 blog articles have unique, existing image files!" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Issues detected with blog images." -ForegroundColor Red
}

Write-Host "`n--- Checking 5 Target Product Images in js/products.js ---" -ForegroundColor Cyan
$prods = @("prod-idli-rice.jpg", "prod-millet-grains.jpg", "prod-urad-dal.jpg", "prod-moong-dal.jpg", "prod-chana-dal.jpg")
foreach ($p in $prods) {
    $path = "assets/images/$p"
    if (Test-Path $path) {
        $file = Get-Item $path
        Write-Host ("[OK] " + $p + " exists (" + $file.Length + " bytes)") -ForegroundColor Green
    } else {
        Write-Host ("[FAIL] " + $p + " missing!") -ForegroundColor Red
    }
}

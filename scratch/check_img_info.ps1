Add-Type -AssemblyName System.Drawing

$files = @("pricing-grain-analysis.jpg", "h1-quality-inspection.jpg", "blog-wheat-grading.jpg")
foreach ($f in $files) {
    $p = "assets/images/$f"
    if (Test-Path $p) {
        $bmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path $p))
        Write-Host "$f : $($bmp.Width)x$($bmp.Height)"
        $bmp.Dispose()
    }
}


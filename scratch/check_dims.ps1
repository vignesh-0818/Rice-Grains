Add-Type -AssemblyName System.Drawing
$check = @('blog-lab-testing.jpg', 'blog-wheat-grading.jpg', 'pricing-grain-analysis.jpg', 'h1-quality-inspection.jpg', 'h2-grading-lab.jpg', 'blog-pulse-procurement-qa.jpg')
foreach ($c in $check) {
    $p = "assets/images/$c"
    if (Test-Path $p) {
        $bmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path $p))
        Write-Host ($c + ': ' + $bmp.Width + 'x' + $bmp.Height + ' (' + (Get-Item $p).Length + ' bytes)')
        $bmp.Dispose()
    }
}


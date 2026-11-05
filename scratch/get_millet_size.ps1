Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path "assets/images/prod-millet-grains.jpg"))
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"
$bmp.Dispose()


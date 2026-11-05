Add-Type -AssemblyName System.Drawing

$milletBmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path "assets/images/prod-millet-grains.jpg"))
$jowarBmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path "assets/images/prod-idli-rice.jpg"))

$outWidth = 1200
$outHeight = 800
$final = New-Object System.Drawing.Bitmap($outWidth, $outHeight)
$g = [System.Drawing.Graphics]::FromImage($final)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Section 1: Ragi (crop right half of milletBmp)
$ragiSrc = New-Object System.Drawing.Rectangle(600, 50, 580, 750)
$ragiDest = New-Object System.Drawing.Rectangle(0, 0, 400, 800)
$g.DrawImage($milletBmp, $ragiDest, $ragiSrc, [System.Drawing.GraphicsUnit]::Pixel)

# Section 2: Bajra (crop left half of milletBmp)
$bajraSrc = New-Object System.Drawing.Rectangle(20, 50, 580, 750)
$bajraDest = New-Object System.Drawing.Rectangle(402, 0, 396, 800)
$g.DrawImage($milletBmp, $bajraDest, $bajraSrc, [System.Drawing.GraphicsUnit]::Pixel)

# Section 3: Sorghum (Jowar) from jowarBmp (center crop)
$jowarSrc = New-Object System.Drawing.Rectangle(200, 50, 800, 750)
$jowarDest = New-Object System.Drawing.Rectangle(800, 0, 400, 800)
$g.DrawImage($jowarBmp, $jowarDest, $jowarSrc, [System.Drawing.GraphicsUnit]::Pixel)

# Add subtle clean vertical divider lines between sections
$pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 20, 30, 25), 2)
$g.DrawLine($pen, 400, 0, 400, 800)
$g.DrawLine($pen, 800, 0, 800, 800)

# Add professional typography tags at the bottom
$font = New-Object System.Drawing.Font("Arial", 14, [System.Drawing.FontStyle]::Bold)
$brushBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 10, 25, 18))
$brushText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$brushBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(160, 52, 211, 153), 1)

$labels = @("Finger Millet (Ragi)", "Pearl Millet (Bajra)", "Sorghum (Jowar)")
$xOffsets = @(35, 435, 845)

for ($i = 0; $i -lt 3; $i++) {
    $rect = New-Object System.Drawing.Rectangle($xOffsets[$i], 720, 330, 48)
    $g.FillRectangle($brushBg, $rect)
    $g.DrawRectangle($brushBorder, $rect)
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($labels[$i], $font, $brushText, [System.Drawing.RectangleF]::op_Implicit($rect), $format)
}

$pen.Dispose()
$font.Dispose()
$brushBg.Dispose()
$brushText.Dispose()
$brushBorder.Dispose()
$g.Dispose()

$final.Save((Resolve-Path "assets/images/blog-ancient-millets-procurement.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$final.Dispose()
$milletBmp.Dispose()
$jowarBmp.Dispose()

Write-Host "Created high-res 3-section millets composite for ancient grains procurement successfully!"


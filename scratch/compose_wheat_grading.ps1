Add-Type -AssemblyName System.Drawing

$wheatGrainsBmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path "assets/images/prod-wheat-milling.jpg"))
$wheatLabBmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path "assets/images/pricing-grain-analysis.jpg"))

$out5 = New-Object System.Drawing.Bitmap(1200, 800)
$g5 = [System.Drawing.Graphics]::FromImage($out5)
$g5.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g5.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$w1 = [int]($wheatGrainsBmp.Width - 60)
$h1 = [int]($wheatGrainsBmp.Height - 60)
$srcWheat = New-Object System.Drawing.Rectangle(30, 30, $w1, $h1)
$destWheat = New-Object System.Drawing.Rectangle(0, 0, 580, 800)
$g5.DrawImage($wheatGrainsBmp, $destWheat, $srcWheat, [System.Drawing.GraphicsUnit]::Pixel)

$w2 = [int]($wheatLabBmp.Width - 40)
$h2 = [int]($wheatLabBmp.Height - 40)
$srcLab = New-Object System.Drawing.Rectangle(20, 20, $w2, $h2)
$destLab = New-Object System.Drawing.Rectangle(580, 0, 620, 800)
$g5.DrawImage($wheatLabBmp, $destLab, $srcLab, [System.Drawing.GraphicsUnit]::Pixel)

# Divider line
$penDiv = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 15, 30, 22), 3)
$g5.DrawLine($penDiv, 580, 0, 580, 800)

# Labels
$bannerBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(215, 12, 28, 20))
$bannerBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 52, 211, 153), 1)
$bannerText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$font = New-Object System.Drawing.Font("Arial", 13, [System.Drawing.FontStyle]::Bold)
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center

$bannerRect = New-Object System.Drawing.Rectangle(40, 720, 500, 48)
$g5.FillRectangle($bannerBg, $bannerRect)
$g5.DrawRectangle($bannerBorder, $bannerRect)
$g5.DrawString("Wheat Grain Physical Sample", $font, $bannerText, [System.Drawing.RectangleF]::op_Implicit($bannerRect), $format)

$bannerRect2 = New-Object System.Drawing.Rectangle(640, 720, 520, 48)
$g5.FillRectangle($bannerBg, $bannerRect2)
$g5.DrawRectangle($bannerBorder, $bannerRect2)
$g5.DrawString("Protein & Gluten Quality Analysis Lab", $font, $bannerText, [System.Drawing.RectangleF]::op_Implicit($bannerRect2), $format)

$penDiv.Dispose()
$bannerBg.Dispose()
$bannerBorder.Dispose()
$bannerText.Dispose()
$font.Dispose()
$g5.Dispose()

$savePath = (Resolve-Path "assets/images/blog-wheat-laboratory-grading.jpg")
$out5.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$out5.Dispose()
$wheatGrainsBmp.Dispose()
$wheatLabBmp.Dispose()

Write-Host "Item 5: blog-wheat-laboratory-grading.jpg generated successfully! Size: $((Get-Item $savePath).Length) bytes"


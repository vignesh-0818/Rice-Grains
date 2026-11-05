Add-Type -AssemblyName System.Drawing

# 1. Item 1: Organic Grain Certification (Inspectors, grain samples, certification docs)
$labBmp = [System.Drawing.Bitmap]::FromFile("C:\Users\HP\.gemini\antigravity\brain\dcc41c42-e284-47d3-bd0c-957f3c43a179\about_quality_lab_1793830697280.jpg")
$out1 = New-Object System.Drawing.Bitmap(1200, 800)
$g1 = [System.Drawing.Graphics]::FromImage($out1)
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g1.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
# Draw wide certification lab inspection view
$g1.DrawImage($labBmp, 0, 0, 1200, 800)
$g1.Dispose()
$out1.Save((Resolve-Path "assets/images/blog-organic-certification-lab.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$out1.Dispose()
Write-Host "Updated Item 1: blog-organic-certification-lab.jpg"

# 2. Item 3: Buhler Optical Color Sorter Calibration
$millingBmp = [System.Drawing.Bitmap]::FromFile("C:\Users\HP\.gemini\antigravity\brain\dcc41c42-e284-47d3-bd0c-957f3c43a179\about_milling_plant_1793830693362.jpg")
$out3 = New-Object System.Drawing.Bitmap(1200, 800)
$g3 = [System.Drawing.Graphics]::FromImage($out3)
$g3.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g3.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g3.DrawImage($millingBmp, 0, 0, 1200, 800)
$g3.Dispose()
$out3.Save((Resolve-Path "assets/images/blog-buhler-optical-sorter.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$out3.Dispose()
$millingBmp.Dispose()
Write-Host "Updated Item 3: blog-buhler-optical-sorter.jpg"

# 3. Item 4: Purity Testing & Moisture Meters (Focused on digital moisture meter, test trays & technician measuring grain)
$out4 = New-Object System.Drawing.Bitmap(1200, 800)
$g4 = [System.Drawing.Graphics]::FromImage($out4)
$g4.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g4.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
# Crop centered on testing apparatus, digital moisture analysis and sample trays
$src4 = New-Object System.Drawing.Rectangle(150, 80, [Math]::Min($labBmp.Width - 250, 1050), [Math]::Min($labBmp.Height - 120, 680))
$dest4 = New-Object System.Drawing.Rectangle(0, 0, 1200, 800)
$g4.DrawImage($labBmp, $dest4, $src4, [System.Drawing.GraphicsUnit]::Pixel)
$g4.Dispose()
$out4.Save((Resolve-Path "assets/images/blog-lab-testing.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$out4.Dispose()
$labBmp.Dispose()
Write-Host "Updated Item 4: blog-lab-testing.jpg"

# 4. Item 5: Commercial Wheat Grading (Amber durum wheat grain samples alongside analytical lab testing deck)
$wheatGrainsBmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path "assets/images/prod-wheat-milling.jpg"))
$wheatLabBmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path "assets/images/pricing-grain-analysis.jpg"))

$out5 = New-Object System.Drawing.Bitmap(1200, 800)
$g5 = [System.Drawing.Graphics]::FromImage($out5)
$g5.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g5.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

# Left side (50%): Golden milling wheat grain samples inspected
$srcWheat = New-Object System.Drawing.Rectangle(50, 30, $wheatGrainsBmp.Width - 100, $wheatGrainsBmp.Height - 60)
$destWheat = New-Object System.Drawing.Rectangle(0, 0, 580, 800)
$g5.DrawImage($wheatGrainsBmp, $destWheat, $srcWheat, [System.Drawing.GraphicsUnit]::Pixel)

# Right side (50%): Laboratory protein analysis, moisture & gluten testing apparatus
$srcLab = New-Object System.Drawing.Rectangle(20, 20, $wheatLabBmp.Width - 40, $wheatLabBmp.Height - 40)
$destLab = New-Object System.Drawing.Rectangle(580, 0, 620, 800)
$g5.DrawImage($wheatLabBmp, $destLab, $srcLab, [System.Drawing.GraphicsUnit]::Pixel)

# Clean vertical divider & title banner
$penDiv = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 15, 30, 22), 3)
$g5.DrawLine($penDiv, 580, 0, 580, 800)

$bannerRect = New-Object System.Drawing.Rectangle(40, 720, 500, 48)
$bannerBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(215, 12, 28, 20))
$bannerBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 52, 211, 153), 1)
$bannerText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$font = New-Object System.Drawing.Font("Arial", 13, [System.Drawing.FontStyle]::Bold)
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center

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

$out5.Save((Resolve-Path "assets/images/blog-wheat-laboratory-grading.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$out5.Dispose()
$wheatGrainsBmp.Dispose()
$wheatLabBmp.Dispose()

Write-Host "Updated Item 5: blog-wheat-laboratory-grading.jpg"


$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$outFile = "$PSScriptRoot/edge_dump.html"
$proc = Start-Process -FilePath $edge -ArgumentList "--headless --disable-gpu --dump-dom `"file:///c:/Users/HP/Downloads/Rice%20%26%20Grains/blog.html`"" -RedirectStandardOutput $outFile -PassThru -Wait

$html = Get-Content $outFile -Raw
$hasArticles = $html -match 'Milling and Sortex Cleaning'
$countText = if ($html -match 'id="blog-count-display">([^<]+)<') { $matches[1] } else { 'not found' }

Write-Host "DOM Rendered Articles Found: $hasArticles" -ForegroundColor $(if ($hasArticles) { "Green" } else { "Red" })
Write-Host "blog-count-display: $countText" -ForegroundColor Cyan


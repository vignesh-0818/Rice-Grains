$brain = Get-ChildItem -Path "C:\Users\HP\.gemini\antigravity\brain\dcc41c42-e284-47d3-bd0c-957f3c43a179" -Filter "*.jpg"
$assets = Get-ChildItem -Path "assets/images" -Filter "*.jpg"

Write-Host "=== Brain Images ===" -ForegroundColor Cyan
foreach ($b in $brain) {
    Write-Host "$($b.Name) ($($b.Length) bytes)"
}

Write-Host "`n=== Assets Images ===" -ForegroundColor Yellow
foreach ($a in $assets) {
    Write-Host "$($a.Name) ($($a.Length) bytes)"
}


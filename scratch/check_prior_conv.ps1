$convPath = Get-ChildItem -Path "C:\Users\HP\.gemini\antigravity\brain" -Directory -Filter "93e89750*" | Select-Object -ExpandProperty FullName
if ($convPath) {
    Write-Host "Found: $convPath"
    $transcript = "$convPath\.system_generated\logs\transcript.jsonl"
    if (Test-Path $transcript) {
        Get-Content $transcript | Select-String -Pattern '"name":"generate_image"|"Prompt"' | ForEach-Object { $_.Line.Substring(0, [Math]::Min(150, $_.Line.Length)) }
    }
}


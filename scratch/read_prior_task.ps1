$p = "C:\Users\HP\.gemini\antigravity\brain\93e89750-cdaa-491a-bdf0-8ab0a1f82392\.system_generated\logs\transcript.jsonl"
Get-Content $p -TotalCount 5 | ForEach-Object {
    if ($_ -match '"content":"([^"]+)"') {
        Write-Host $matches[1].Substring(0, [Math]::Min(150, $matches[1].Length))
    }
}


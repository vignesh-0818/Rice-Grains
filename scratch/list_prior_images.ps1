$p = "C:\Users\HP\.gemini\antigravity\brain\93e89750-cdaa-491a-bdf0-8ab0a1f82392\.system_generated\logs\transcript.jsonl"
Get-Content $p | ForEach-Object {
    if ($_ -match '"ImageName":"([^"]+)"') {
        $imgName = $matches[1]
        $prompt = if ($_ -match '"Prompt":"([^"]+)"') { $matches[1] } else { '' }
        Write-Host "$imgName -> $($prompt.Substring(0, [Math]::Min(120, $prompt.Length)))"
    }
}


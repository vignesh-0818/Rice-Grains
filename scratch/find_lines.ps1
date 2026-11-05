$lines = Get-Content js/blog.js
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '^\s*id:\s*"([^"]+)"') {
        $id = $matches[1]
        for ($j = $i; $j -lt [Math]::Min($i + 12, $lines.Length); $j++) {
            if ($lines[$j] -match '^\s*image:\s*"([^"]+)"') {
                Write-Host ('Line ' + ($j + 1) + ': ' + $id + ' -> ' + $matches[1])
                break
            }
        }
    }
}


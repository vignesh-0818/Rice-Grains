$lines = Get-Content js/blog.js
$count = 0
for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    $opens = ([regex]::Matches($line, '\(')).Count
    $closes = ([regex]::Matches($line, '\)')).Count
    if ($opens -ne $closes) {
        $count += ($opens - $closes)
        Write-Host ("Line " + ($i + 1) + " (Net: " + $count + "): " + $line.Trim())
    }
}


Get-ChildItem -Path *.html | ForEach-Object {
    $fn = $_.Name
    $lines = Get-Content $_.FullName
    for ($i = 0; $i -lt $lines.Length; $i++) {
        if ($lines[$i] -match 'type="(tel|email)"') {
            Write-Host ($fn + ':' + ($i + 1) + ' -> ' + $lines[$i].Trim())
        }
    }
}

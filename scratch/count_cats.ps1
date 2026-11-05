$articles = Get-Content js/blog.js -Raw
$matches = [regex]::Matches($articles, 'category:\s*"([^"]+)"')
$cats = $matches | ForEach-Object { $_.Groups[1].Value }
$cats | Group-Object | Select-Object Name, Count | Format-Table -AutoSize


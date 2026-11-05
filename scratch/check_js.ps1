$files = Get-ChildItem -Path js/*.js
foreach ($f in $files) {
    Write-Host "Checking $($f.Name)..." -ForegroundColor Cyan
    $content = Get-Content $f.FullName -Raw
    
    # Check balanced braces, brackets, and quotes
    $openBraces = ([regex]::Matches($content, '\{')).Count
    $closeBraces = ([regex]::Matches($content, '\}')).Count
    $openParens = ([regex]::Matches($content, '\(')).Count
    $closeParens = ([regex]::Matches($content, '\)')).Count
    $openBrackets = ([regex]::Matches($content, '\[')).Count
    $closeBrackets = ([regex]::Matches($content, '\]')).Count
    
    Write-Host "  Braces: $openBraces / $closeBraces (Delta: $($openBraces - $closeBraces))"
    Write-Host "  Parens: $openParens / $closeParens (Delta: $($openParens - $closeParens))"
    Write-Host "  Brackets: $openBrackets / $closeBrackets (Delta: $($openBrackets - $closeBrackets))"
    
    if (($openBraces -eq $closeBraces) -and ($openParens -eq $closeParens) -and ($openBrackets -eq $closeBrackets)) {
        Write-Host "  [OK] Balanced delimiters" -ForegroundColor Green
    } else {
        Write-Host "  [FAIL] Unbalanced delimiters!" -ForegroundColor Red
    }
}


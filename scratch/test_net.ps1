try {
    $r = Invoke-WebRequest -Uri 'https://upload.wikimedia.org' -Method Head -TimeoutSec 5
    Write-Host "Status: $($r.StatusCode)"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
}


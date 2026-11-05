Get-Content js/blog.js | Where-Object { $_ -match '^\s*(id|title|image):' }


Get-ChildItem -Path 'C:\Users\HP\.gemini\antigravity\brain' -Recurse -Include *.jpg,*.png | 
  Where-Object { $_.FullName -notmatch '\\\.system_generated' -and $_.FullName -notmatch '\\\.user_uploaded' -and $_.FullName -notmatch 'tempmediaStorage' } | 
  Select-Object Name, Length, FullName | Format-Table -Wrap


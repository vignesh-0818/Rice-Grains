# Test script for RTL placeholder alignment, select contrast, and mobile controls
$ErrorActionPreference = "Stop"

$css = Get-Content "css/style.css" -Raw
$js = Get-Content "js/main.js" -Raw

$allPassed = $true

function Assert-Contains($content, $pattern, $description) {
  if ($content -match $pattern) {
    Write-Host "[PASS] $description" -ForegroundColor Green
  } else {
    Write-Host "[FAIL] $description" -ForegroundColor Red
    $script:allPassed = $false
  }
}

Write-Host "=== Verifying RTL Form & Placeholder Overrides ===" -ForegroundColor Cyan
Assert-Contains $css '\[dir="rtl"\] input\[type="email"\]' "CSS targets [dir='rtl'] input[type='email']"
Assert-Contains $css '\[dir="rtl"\] input\[type="tel"\]' "CSS targets [dir='rtl'] input[type='tel']"
Assert-Contains $css '\[dir="rtl"\] input\[type="email"\]::placeholder' "CSS targets [dir='rtl'] input[type='email']::placeholder"
Assert-Contains $css '\[dir="rtl"\] input\[type="tel"\]::placeholder' "CSS targets [dir='rtl'] input[type='tel']::placeholder"
Assert-Contains $css '\[dir="rtl"\] \.form-select\s*\{[^}]*background-position:\s*left\s+0\.85rem' "CSS positions form-select arrow on left in RTL with padding"
Assert-Contains $js 'el\.setAttribute\(''dir'', ''rtl''\)' "JS applies explicit dir='rtl' attribute to all form controls"

Write-Host "`n=== Verifying Form Select Option High-Contrast Styles ===" -ForegroundColor Cyan
Assert-Contains $css '\.form-select option\s*\{[^}]*background-color:\s*#ffffff' "CSS has explicit light mode option background"
Assert-Contains $css '\[data-theme="dark"\] \.form-select option\s*\{[^}]*background-color:\s*#14231b' "CSS has explicit dark mode option background"
Assert-Contains $css '\[data-theme="dark"\] \.form-select option:checked' "CSS styles dark mode checked/focused option with high contrast"

Write-Host "`n=== Verifying Mobile Top Navbar Controls Alignment ===" -ForegroundColor Cyan
Assert-Contains $css '#theme-toggle-btn-mobile\s*\{[^}]*width:\s*38px\s*!important;\s*height:\s*38px' "CSS styles mobile theme button with 38px height"
Assert-Contains $css '#rtl-toggle-btn-mobile\s*\{[^}]*height:\s*38px\s*!important;\s*min-width:\s*52px' "CSS styles mobile RTL button with 38px height and min-width"
Assert-Contains $css '\.wholesale-navbar \.navbar-toggler\s*\{[^}]*width:\s*38px\s*!important;\s*height:\s*38px' "CSS styles navbar-toggler with 38px matching height"

Write-Host "`n=== Verifying Mobile Drawer Home Dropdown & Active Item ===" -ForegroundColor Cyan
Assert-Contains $css '\[data-theme="dark"\] \.navbar-nav \.dropdown-item\.active\s*\{[^}]*color:\s*#52b788\s*!important' "CSS fixes dark mode active dropdown item text to #52b788"
Assert-Contains $css '\.wholesale-navbar \.dropdown-item\.active,\s*\[data-theme="dark"\] \.wholesale-navbar \.dropdown-item\.active' "CSS styles mobile active dropdown item with mint highlight"
Assert-Contains $css '\.wholesale-navbar \.dropdown-item\s*\{[^}]*white-space:\s*normal\s*!important' "CSS prevents truncation with white-space: normal"
Assert-Contains $css '\.wholesale-navbar \.dropdown-menu\s*\{[^}]*margin:\s*0\.35rem\s+0' "CSS removes horizontal indent margin from mobile dropdown menu"

if ($allPassed) {
  Write-Host "`nAll targeted checks passed with 100% success!" -ForegroundColor Green
} else {
  Write-Host "`nSome checks failed." -ForegroundColor Red
  exit 1
}


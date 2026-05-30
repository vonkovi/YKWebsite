#Requires -Version 5.1
$ErrorActionPreference = 'Stop'

Write-Host "Setting up YvonKim.com..."

# Node version check
$RequiredNode = 22
$nodeRaw = (node -v).TrimStart('v')
$CurrentNode = [int]($nodeRaw.Split('.')[0])
if ($CurrentNode -lt $RequiredNode) {
  Write-Host "Warning: Node $RequiredNode+ required, found v$nodeRaw"
}

# Install dependencies (npm.cmd sidesteps PowerShell's npm.ps1 script policy)
Write-Host "Installing dependencies..."
npm.cmd install
if ($LASTEXITCODE -ne 0) { throw "npm install failed" }

# Type-check
Write-Host "Running type check..."
npx.cmd astro check
if ($LASTEXITCODE -ne 0) { throw "astro check failed" }

Write-Host ""
Write-Host "Setup complete."
Write-Host "  Start dev server: npm run dev"
Write-Host "  Production build: npm run build"

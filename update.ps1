#Requires -Version 5.1
$ErrorActionPreference = 'Stop'

Write-Host "Updating YvonKim.com..."

Write-Host "Pulling latest changes..."
git pull
if ($LASTEXITCODE -ne 0) { throw "git pull failed" }

# npm.cmd / npx.cmd sidestep PowerShell's npm.ps1 script policy
Write-Host "Syncing dependencies..."
npm.cmd install
if ($LASTEXITCODE -ne 0) { throw "npm install failed" }

Write-Host "Running type check..."
npx.cmd astro check
if ($LASTEXITCODE -ne 0) { throw "astro check failed" }

Write-Host "Verifying build..."
npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw "build failed" }

Write-Host ""
Write-Host "Update complete."
Write-Host "  Start dev server: npm run dev"
Write-Host "  Preview build:    npm run preview"

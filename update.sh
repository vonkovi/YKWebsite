#!/bin/bash
set -e

echo "Updating YvonKim.com..."

echo "Pulling latest changes..."
git pull

echo "Syncing dependencies..."
npm install

echo "Running type check..."
npx astro check

echo "Verifying build..."
npm run build

echo ""
echo "Update complete."
echo "  Start dev server: npm run dev"
echo "  Preview build:    npm run preview"

#!/bin/bash
set -e

echo "Setting up YvonKim.com..."

# Node version check
REQUIRED_NODE="22"
CURRENT_NODE=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$CURRENT_NODE" -lt "$REQUIRED_NODE" ]; then
  echo "Warning: Node $REQUIRED_NODE+ required, found $(node -v)"
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Type-check
echo "Running type check..."
npx astro check

echo ""
echo "Setup complete."
echo "  Start dev server: npm run dev"
echo "  Production build: npm run build"

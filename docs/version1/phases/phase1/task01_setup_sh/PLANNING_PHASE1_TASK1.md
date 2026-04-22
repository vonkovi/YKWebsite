---
# PLANNING — Phase 1, Task 1: setup.sh

**Status: Complete.**

---

## File Location

`setup.sh` at repo root. Runs from `C:\Users\kmyn7\Projects\YKWebsite\`.

---

## Script Content

```bash
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
```

---

## Make Executable

```bash
chmod +x setup.sh
```

---

## Update CLAUDE.md

Add `./setup.sh` to dev commands section.

---

## Checklist

- [x] `setup.sh` created at repo root
- [x] `chmod +x setup.sh` run
- [x] Script runs cleanly end-to-end
- [x] CLAUDE.md dev commands updated

## Outcome
One-command setup from fresh clone.

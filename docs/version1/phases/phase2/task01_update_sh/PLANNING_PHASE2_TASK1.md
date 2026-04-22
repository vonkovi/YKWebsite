---
# PLANNING — Phase 2, Task 1: update.sh

**Status: Pending.**

---

## File Location

`update.sh` at repo root, alongside `setup.sh`.

---

## Script Content

```bash
#!/bin/bash
set -e

echo "Updating YvonKim.com..."

# Pull latest changes
echo "Pulling latest changes..."
git pull

# Sync dependencies
echo "Syncing dependencies..."
npm install

# Type-check
echo "Running type check..."
npx astro check

# Production build check
echo "Verifying build..."
npm run build

echo ""
echo "Update complete."
echo "  Start dev server: npm run dev"
echo "  Preview build:    npm run preview"
```

---

## Make Executable

```bash
chmod +x update.sh
```

---

## Update CLAUDE.md

Add `./update.sh` to dev commands section.

---

## Checklist

- [ ] `update.sh` created at repo root
- [ ] `chmod +x update.sh` run
- [ ] Script runs cleanly end-to-end
- [ ] CLAUDE.md dev commands updated

## Outcome
One-command project refresh — pull, install, check, build.

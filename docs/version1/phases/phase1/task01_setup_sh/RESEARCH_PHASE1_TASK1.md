---
# RESEARCH — Phase 1, Task 1: setup.sh

**Task:** Create a single shell script that sets up the project from a fresh clone.

---

## Purpose

A developer (or future Claude session) cloning this repo should be able to run one command to get to a working dev environment:

```bash
./setup.sh
```

Instead of remembering:
```bash
npm install
npx astro check
```

---

## What setup.sh Should Do

1. Check Node version meets minimum (`>=22.12.0` per `package.json` engines field)
2. Run `npm install`
3. Run `npx astro check` to verify the project type-checks cleanly
4. Print next steps to the terminal

## What It Should NOT Do

- Start the dev server (that's `npm run dev`, user's choice)
- Run the build (slow, not needed for setup)
- Modify any project files

## Shell Compatibility

Target: `bash`. Windows users run via Git Bash (standard for this environment). Use `#!/bin/bash` shebang.

## Node Version Check

`package.json` declares `"engines": { "node": ">=22.12.0" }`. Script should warn (not fail hard) if Node version is below this.

```bash
REQUIRED_NODE="22"
CURRENT_NODE=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$CURRENT_NODE" -lt "$REQUIRED_NODE" ]; then
  echo "Warning: Node $REQUIRED_NODE+ required, found $(node -v)"
fi
```

## Exit on Error

Use `set -e` so any failed command stops the script immediately — prevents silent partial installs.

## Open Questions
- None.

---
# RESEARCH — Phase 2, Task 1: update.sh

**Task:** Create a script that refreshes the project to the latest state — pulls changes, installs new deps, rebuilds.

---

## Purpose

`setup.sh` is for first-time setup from a fresh clone.
`update.sh` is for resuming work or refreshing after changes — pull latest, sync deps, verify build.

## What update.sh Should Do

1. `git pull` — get latest commits (useful when working across machines)
2. `npm install` — sync any new/changed dependencies
3. `npx astro check` — verify no type errors introduced
4. `npm run build` — verify production build still passes
5. Print next steps

## What It Should NOT Do

- Start the dev server
- Commit or push changes
- Modify any project files

## Difference from setup.sh

| | setup.sh | update.sh |
|---|---|---|
| `git pull` | No | Yes |
| `npm install` | Yes | Yes |
| `npx astro check` | Yes | Yes |
| `npm run build` | No | Yes |
| Use case | Fresh clone | Resuming work |

## Shell Compatibility

Same as `setup.sh` — bash, `set -e`, `#!/bin/bash`.

## Open Questions
- None.

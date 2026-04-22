---
# PLANNING — Phase 0, Task 6: Git Initialization

**Status: Pending.** Runs last — after scaffold, configuration, and fonts are all verified.

---

## Why Git Is Last

The initial commit should capture a known-good state: scaffold complete, configured, type-checked, and building. Not an in-progress state.

---

## Step 1: Verify Pre-conditions

Before running git init, confirm:
- [ ] `npx astro check` passes
- [ ] `npm run build` passes
- [ ] `tailwind.config.mjs` is configured (DaisyUI, fonts, colors)
- [ ] `src/content.config.ts` exists with all three schemas
- [ ] `src/layouts/BaseLayout.astro` exists
- [ ] `src/styles/global.css` exists

---

## Step 2: Initialize Git

```bash
git init
```

---

## Step 3: Verify `.gitignore`

Astro auto-generates `.gitignore`. Confirm it includes:

```
node_modules/
dist/
.astro/
.env
.env.*
!.env.example
```

Add if missing.

---

## Step 4: Stage and Commit

```bash
git add .
git commit -m "init: phase0 complete — Astro + TypeScript + Tailwind + DaisyUI scaffold"
```

---

## Step 5: Update Docs

After commit:
- Mark P0-1 through P0-6 complete in `docs/version1/PLANNING.md`
- Update `docs/version1/STATUS.md` — phase advances to Phase 1

---

## Checklist

- [ ] All pre-conditions verified
- [ ] `git init` run
- [ ] `.gitignore` verified
- [ ] Initial commit made with correct message
- [ ] `PLANNING.md` P0 tasks marked complete
- [ ] `STATUS.md` updated to Phase 1

## Outcome
Phase 0 closed. Clean git history starts here. Ready for Phase 1.

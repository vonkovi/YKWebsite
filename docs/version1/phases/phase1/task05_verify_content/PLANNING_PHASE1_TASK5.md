---
# PLANNING — Phase 1, Task 5: Verify Content

**Status: Pending.** Runs last — after tasks 01–04 complete.

---

## Step 1: Type-check

```bash
npx astro check
```

Expected: `0 errors, 0 warnings, 0 hints`

---

## Step 2: Build

```bash
npm run build
```

Expected: all pages built successfully with no errors.

---

## Step 3: Update Docs

- Mark P1-3 through P1-5 complete in `docs/version1/PLANNING.md`
- Update `docs/version1/STATUS.md` — phase advances to Phase 2
- Commit: `feat: phase1 complete — placeholder content + setup.sh`

---

## Checklist

- [ ] `npx astro check` passes (0 errors)
- [ ] `npm run build` passes
- [ ] `PLANNING.md` P1 tasks marked complete
- [ ] `STATUS.md` updated to Phase 2
- [ ] Git commit made

## Outcome
Phase 1 closed. All three content collections populated and verified. Ready for Phase 2.

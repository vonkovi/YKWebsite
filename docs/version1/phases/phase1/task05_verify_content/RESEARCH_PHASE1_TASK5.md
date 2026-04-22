---
# RESEARCH — Phase 1, Task 5: Verify Content

**Task:** Confirm all placeholder content passes type-checking and builds without errors.

---

## Verification Commands

```bash
npx astro check   # type-checks all .astro and .ts files, syncs content collections
npm run build     # full static build — catches runtime errors type-check misses
```

## What `astro check` Validates

- Frontmatter fields match the Zod schema in `src/content.config.ts`
- Required fields are present
- Field types are correct (e.g. `date` is a valid date, `category` is a valid enum value)
- `.astro` file TypeScript errors

## What `npm run build` Catches in Addition

- MDX parse errors (malformed markdown/JSX)
- Missing imports referenced in MDX
- Route generation errors

## Expected Output

```
npx astro check  →  0 errors, 0 warnings, 0 hints
npm run build    →  X pages built successfully
```

## Common Failure Modes

| Error | Cause | Fix |
|-------|-------|-----|
| `Expected date, received string` | Date written as `"2024-01-01"` not `2024-01-01` | Remove quotes from date in frontmatter |
| `Invalid enum value` | Category/type not in allowed list | Check enum values in schema |
| `Required field missing` | Omitted a required frontmatter key | Add missing field |
| `No files found matching pattern` | Empty content directory | Add at least one MDX file |

## Open Questions
- None.

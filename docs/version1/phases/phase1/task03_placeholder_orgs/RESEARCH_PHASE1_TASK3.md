---
# RESEARCH — Phase 1, Task 3: Placeholder Org Content

**Task:** Add 3+ placeholder MDX files to `src/content/orgs/` that satisfy the Zod schema.

---

## Schema Reference (from `src/content.config.ts`)

```ts
z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  featured: z.boolean(),
  pinned: z.boolean().default(false),
  heroImage: z.string(),
  mission: z.string(),
  url: z.string().optional(),
})
```

## Frontmatter Format

```mdx
---
title: "Org Name"
description: "One sentence description."
date: 2023-01-01
featured: true
pinned: true
heroImage: "/images/orgs/placeholder.jpg"
mission: "The mission statement of the org."
url: "https://orgwebsite.com"
---

Org body content here.
```

## Minimum Required

3 files. One must have `pinned: true`, at least 2 must have `featured: true`.

## File Naming

Snake-case slug. `awebohack.mdx` → `/orgs/awebohack`.

## Key Difference from Projects

Orgs have a `mission` field (required string) instead of `type`, `githubUrl`, `liveUrl`. The mission is displayed on the org detail page and the org's landing tile.

## Open Questions
- None.

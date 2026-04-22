---
# RESEARCH — Phase 1, Task 2: Placeholder Project Content

**Task:** Add 3+ placeholder MDX files to `src/content/projects/` that satisfy the Zod schema.

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
  tags: z.array(z.string()),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  type: z.enum(['github', 'hardware', 'fullstack']),
})
```

## Frontmatter Format

```mdx
---
title: "Project Title"
description: "One sentence description."
date: 2024-01-01
featured: true
pinned: true
heroImage: "/images/projects/placeholder.jpg"
tags: ["TypeScript", "Astro"]
githubUrl: "https://github.com/yvonkim/project"
type: "fullstack"
---

Project body content here.
```

## Minimum Required

3 files. One must have `pinned: true` (the black tile), at least 2 must have `featured: true` (landing grid).

## File Naming

Snake-case slug = URL slug. `sim42.mdx` → `/projects/sim42`.

## heroImage

Use a placeholder path (`/images/projects/placeholder.jpg`) — actual images come in a later phase. The `public/` folder will hold final assets.

## Types to Cover

Cover all three types across the 3 files: `github`, `hardware`, `fullstack`.

## Open Questions
- None.

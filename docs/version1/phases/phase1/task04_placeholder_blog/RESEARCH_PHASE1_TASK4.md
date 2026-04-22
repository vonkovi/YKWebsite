---
# RESEARCH — Phase 1, Task 4: Placeholder Blog Content

**Task:** Add 3+ placeholder MDX files to `src/content/blog/` that satisfy the Zod schema.

---

## Schema Reference (from `src/content.config.ts`)

```ts
z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  category: z.enum(['opinions', 'technical', 'startup']),
  tags: z.array(z.string()),
})
```

## Frontmatter Format

```mdx
---
title: "Post Title"
description: "One sentence description."
date: 2024-06-01
category: "opinions"
tags: ["work", "productivity"]
---

Post body content here.
```

## Minimum Required

3 files. Cover all 3 categories across the files: `opinions`, `technical`, `startup`.

## File Naming

Snake-case slug. `work_in_a_cubicle.mdx` → `/blog/work_in_a_cubicle`.

## No `featured` or `pinned`

Blog has no grid — only a flat list filtered by category. No featured/pinned flags needed.

## Existing Posts

User has some existing blog posts. Placeholders stand in until those are imported in P1-5 (or a later task). Use realistic titles matching the wireframe: "Opinion: Work in a Cubicle" was visible.

## Open Questions
- None.

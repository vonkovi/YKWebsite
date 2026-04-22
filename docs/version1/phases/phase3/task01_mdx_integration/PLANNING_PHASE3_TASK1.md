---
# PLANNING — Phase 3, Task 1: MDX Integration

**Status: Pending.**

---

## Problem

Content collections return empty arrays. `.mdx` files emit "No entry type found" warnings. Slug pages generate zero routes. Root cause: `@astrojs/mdx` not installed.

---

## Step 1: Install Integration

```bash
npx astro add mdx
```

Confirm prompts with `y`. This auto-updates `astro.config.mjs`.

---

## Step 2: Verify astro.config.mjs

After install, confirm the file looks like:

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] }
});
```

---

## Step 3: Verify Build

```bash
npm run build
```

Expected output:
- No "No entry type found" warnings
- Slug routes generated (e.g. `/projects/sim42`, `/blog/work_in_a_cubicle`)
- `npx astro check` passes

---

## Checklist

- [ ] `npx astro add mdx` run
- [ ] `astro.config.mjs` includes `mdx()` integration
- [ ] `npm run build` produces no "No entry type found" warnings
- [ ] Static slug routes are generated for all 9 MDX entries

## Outcome
MDX integration live. Content collections fully operational. Slug pages generate real routes.

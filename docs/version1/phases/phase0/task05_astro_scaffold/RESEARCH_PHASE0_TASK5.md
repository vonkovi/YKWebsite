---
# RESEARCH — Phase 0, Task 5: Astro Scaffold Execution

**Task:** Identify the exact sequence of commands to scaffold the Astro project.

---

## What This Task Covers

Task 3 (astro_init) covered the technical approach — versions, APIs, configuration patterns.
This task covers the execution sequence — the exact commands run in order to produce a working project.

---

## Command Sequence (Pre-Implementation Plan)

### Step 1: Scaffold
```bash
npm create astro@latest . -- --template minimal --typescript strict --no-git
```

### Step 2: Add Tailwind
```bash
npx astro add tailwind
```
Expected: installs `@astrojs/tailwind`, creates `tailwind.config.mjs`.

### Step 3: Install DaisyUI v4
```bash
npm install -D daisyui@4
```

### Step 4: Install Fontsource
```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/dm-sans
```

### Step 5: Create Content Directories
```bash
mkdir -p src/content/projects src/content/orgs src/content/blog
mkdir -p src/components src/layouts
```

---

## Deviation Log

### Scaffold into non-empty directory
- **Expected:** `npm create astro@latest .` scaffolds into current directory
- **Actual:** CLI refused — directory was not empty (had `CLAUDE.md`, `docs/`, `UI.png`). Scaffolded into `_temp/` subfolder then moved files up with `cp -r _temp/. . && rm -rf _temp`.

### Tailwind version
- **Expected:** `npx astro add tailwind` installs Tailwind v3, creates `tailwind.config.mjs`
- **Actual:** Installed Tailwind **v4** (`@tailwindcss/vite` 4.2.4). No `tailwind.config.mjs` generated. Created `src/styles/global.css` with `@import "tailwindcss"`. Vite plugin added to `astro.config.mjs`.

### DaisyUI version
- **Expected:** `npm install -D daisyui@4`
- **Actual:** `npm install daisyui` (v5.5.19) — Tailwind v4 requires DaisyUI v5. Loaded via `@plugin "daisyui"` in `global.css`.

### `@astrojs/check` missing
- **Expected:** `npx astro check` works immediately
- **Actual:** Required separate install: `npm install @astrojs/check typescript`

---

## Actual File Structure After Scaffold

```
YKWebsite/
  src/
    content/
      projects/       ← empty, ready for MDX
      orgs/           ← empty, ready for MDX
      blog/           ← empty, ready for MDX
    content.config.ts ← Astro 6 Content Collections config
    components/       ← empty
    layouts/
      BaseLayout.astro
    styles/
      global.css      ← Tailwind v4 CSS config (no tailwind.config.mjs)
    pages/
      index.astro
  public/
    favicon.ico
    favicon.svg
  astro.config.mjs    ← @tailwindcss/vite vite plugin (not @astrojs/tailwind)
  tsconfig.json
  package.json
  package-lock.json
  .gitignore
  .vscode/
  CLAUDE.md
  docs/
  UI.png
```

---

## Open Questions at Time of Research
- None. All dependencies and versions confirmed in task03 research.

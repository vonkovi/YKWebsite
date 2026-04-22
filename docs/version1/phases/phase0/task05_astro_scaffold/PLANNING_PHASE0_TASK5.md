---
# PLANNING — Phase 0, Task 5: Astro Scaffold Execution

**Status: Complete.**

---

## Execution Order

Ran FIRST. Tasks 03 and 04 depended on this completing.

---

## Step 1: Scaffold Astro

Directory was not empty — CLI refused to scaffold into `.`. Workaround: scaffold into `_temp/`, move files up.

```bash
npm create astro@latest _temp -- --template minimal --typescript strict --no-git --yes
cp -r _temp/. .
rm -rf _temp
```

Installed: Astro **6.1.8** (not 5.x as researched).

---

## Step 2: Add Tailwind Integration

```bash
npx astro add tailwind --yes
```

Installed: Tailwind **v4.2.4** (`@tailwindcss/vite`) — not Tailwind v3. No `tailwind.config.mjs` created. Creates `src/styles/global.css` with `@import "tailwindcss"`.

---

## Step 3: Install DaisyUI v5

**Planned:** `npm install -D daisyui@4`
**Actual:** `npm install daisyui` (v5.5.19) — Tailwind v4 requires DaisyUI v5.

```bash
npm install daisyui
```

---

## Step 4: Install Fontsource

```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/dm-sans
```

---

## Step 5: Create Directory Structure

```bash
mkdir -p src/content/projects src/content/orgs src/content/blog
mkdir -p src/components src/layouts src/styles
```

---

## Step 6: Install `@astrojs/check`

Not auto-installed. Required separately:

```bash
npm install @astrojs/check typescript
```

---

## Step 7: Verify Build

```
npx astro check  →  0 errors, 0 warnings, 0 hints
npm run build    →  1 page built in 971ms
```

---

## Actual File Tree After This Task

```
YKWebsite/
  src/
    content/
      projects/       ← empty
      orgs/           ← empty
      blog/           ← empty
    content.config.ts
    components/
    layouts/
      BaseLayout.astro
    styles/
      global.css      ← Tailwind v4 CSS config (no tailwind.config.mjs)
    pages/
      index.astro
  public/
  astro.config.mjs    ← @tailwindcss/vite vite plugin
  tsconfig.json
  package.json
  .gitignore
```

---

## Checklist

- [x] Astro scaffolded (v6.1.8 via `_temp/` workaround)
- [x] `npx astro add tailwind` run (Tailwind v4 installed)
- [x] `npm install daisyui` run (v5.5.19)
- [x] Fontsource packages installed
- [x] Directory structure created
- [x] `@astrojs/check` installed
- [x] `npx astro check` passes (0 errors)
- [x] `npm run build` passes

## Unlocked
- task03_astro_init ✓
- task04_typography ✓

## Outcome
Clean, buildable Astro 6 project. Ready for configuration.

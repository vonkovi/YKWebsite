# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project

YvonKim.com is a personal portfolio + writing site for Yvon Kim — electrical engineer, software engineer, and prompt engineer. It is a single scrolling page with two tabs — **Projects** and **Writing** — and nothing else. The work does the talking; there is no hero, no bio, no "about." The audience is the general public (and hiring managers).

**North Star: clarity and intentional restraint.** Every decision is judged against the aesthetic: a quiet, text-forward IEEE/engineering-lab page — Paul Graham minimalism rendered in the IBM Plex superfamily, with a single IEEE-navy accent reserved for interaction. If it adds noise, cut it. (Implemented from a Claude Design handoff; see chat intent: name-led project rows, one calm column, accent = interaction only, eye-comfort off-white.)

---

## Repository Layout

```
src/                  ← Astro source
  content/
    projects/         ← MDX — one file per project (frontmatter only; body unused)
    blog/             ← MDX — one file per essay (body renders on its /writing/<slug> page, not inline)
  content.config.ts   ← Zod schemas: projects + blog (NO orgs)
  components/
    Header.astro      ← Sticky nav: wordmark + tabs (left), social + résumé icons (right)
    Footer.astro      ← Simplified row: Email · GitHub · LinkedIn · Résumé + copyright
  layouts/
    BaseLayout.astro  ← HTML shell (IBM Plex via Google Fonts, global.css, meta, js class)
  pages/
    index.astro       ← Home — both tab views (Projects rows + Writing link-list) + client script
    projects/[slug].astro ← Project case-study page — one per project (subnav + head/hero/prose)
    writing/[slug].astro  ← Essay detail page — one per blog post (subnav + prose reading column)
  styles/
    global.css        ← Plain CSS design system (custom props, oklch palette). No Tailwind.
docs/                 ← Older planning docs (version1/) — predate this redesign; treat as historical
public/               ← Static assets (Yvon-Kim-Resume.pdf, favicon)
setup.ps1             ← First-time setup script (PowerShell)
update.ps1            ← Pull + sync deps + type-check + build (PowerShell)
```

---

## Active Development

> **Note:** The `docs/version1/` planning docs describe the *earlier* portfolio/blog-zone architecture (orgs, two zones, beige/Playfair, DaisyUI). That design was superseded by the Claude Design handoff implemented here. The docs are kept for history but are **not** authoritative — this CLAUDE.md and the live `src/` are.

### Dev commands

```powershell
.\setup.ps1            # first-time setup from fresh clone (install + type-check)
.\update.ps1           # pull latest + sync deps + type-check + build
npm install            # install dependencies
npm run dev            # dev server (localhost:4321)
npm run build          # production build
npm run preview        # preview production build locally
npm run astro          # direct Astro CLI access
npx astro check        # type-check .astro and .ts files
```
---

## Architecture Summary

Static Astro site built around a home page (`/`) plus a generated essay page per post (`/writing/<slug>`), with two Astro Content Collections: `projects` and `blog`. All content is MDX flat files — no database, no server runtime.

### Home page, two tabs

`index.astro` renders both views; a small inlined client script toggles them, syncs the URL hash (`#writing`), and runs the staggered reveal.

- **Projects tab** (default) — name-led rows from the `projects` collection, sorted by `order`. Each row: image well (left) + category label / name / 3-line-clamped description / `Source` link (right). The whole row links to that project's case-study page (`/projects/<slug>`) — the title is a link and a client-side handler navigates on any non-link click. Hairline dividers between rows.
- **Writing tab** — compact list from the `blog` collection, newest-first by `date`. Each entry is `date · title · ↗` and is a link to that essay's page (`/writing/<slug>`); it no longer expands inline. Date label format: `YYYY · MM`.

### Detail pages (projects + essays)

Both detail types use `Header` in its **`subnav`** variant (wordmark + a `←` back-link replacing the tabs; `variant="subnav"` + `backHref`/`backLabel` props) and the shared `.detail` / `.prose` styles.

- **`projects/[slug].astro`** — one case-study page per `projects` entry (`getStaticPaths` over the collection). Layout: `.detail-head` (category eyebrow → name → lede → meta row of Year · Stack · `View source`), a `.detail-hero` image well (real `<img>` if `image` frontmatter is set, else a quiet placeholder), the MDX **body** as the case-study prose (`.prose`, ≤68ch), and a `.detail-foot` (`← All work` back-link + source button). Detail-page fields (`lede`, `year`, `stack`, `source`) are optional frontmatter; each meta item is omitted when absent.
- **`writing/[slug].astro`** — one reading page per `blog` entry. Layout: `.essay-head` (date + title) sharing the reading axis, the MDX body in a centered `.prose` column, and a `.detail-foot` (`← All writing` back-link + copyright).

### Key Invariants

- Static output only — no server runtime, no API routes, no database
- **Routes are `/`, `/projects/<slug>`, and `/writing/<slug>` only.** No `/projects` or `/blog` index pages, no `/orgs`. Projects and writing entries link out to their own detail page; don't add other routes without being asked.
- **No Organizations.** That collection was removed in the redesign.
- Projects are content-driven by the `projects` collection and ordered by the `order` field — never hardcode the list.
- A project shows a real `<img>` when frontmatter has `image`; otherwise a quiet placeholder well (the project title in faint mono). Drop real screenshots in via `image:`. Project image wells (row + detail hero) render through `components/ProjectMedia.astro`.
- Optional `video:` frontmatter on a project adds a **hover-preview**: the image shows by default, and hovering plays the video muted with no controls (so it can't be scrubbed/rewound); on mouse-leave it pauses and keeps its position — forward-only, never rewinds. Disabled under `prefers-reduced-motion`. No `video` → just the image.
- **Images** live in `public/` (e.g. `public/projects/`, `public/blog/`) and are referenced by root-absolute path (`/projects/foo.png`). Use `image:` frontmatter for a project's row/hero; inside any MDX body use Markdown `![alt](/path)` or an HTML `<figure>`/`<figcaption>`. `.prose img` and `.prose figure` are styled in `global.css` (bordered, rounded, captioned). No `astro:assets` optimization — size images before adding.
- Light mode only — no dark mode toggle.
- Header icons: Email (mailto), GitHub, LinkedIn, then a divider, then Résumé (downloads `/Yvon-Kim-Resume.pdf`). Footer repeats the same four as text links.
- Reveal/hover motion must never hide content: viewport-based reveal with re-runs, fully disabled under `prefers-reduced-motion`.

---

## Design System

- **Aesthetic:** Quiet IEEE / engineering-lab page. Paul Graham minimalism, subtractive not additive.
- **Typography:** IBM Plex Sans (display + body), IBM Plex Mono (small metadata/labels only — tabs, dates, footer, category labels). No serif. Loaded via Google Fonts `<link>` in `BaseLayout`.
- **Palette (oklch custom props in `global.css`):** soft cool off-white page (`--bg`), near-white wells (`--bg-panel`), recessed sunk tone (`--bg-sunk`), deep-slate text (`--ink` / `--ink-soft` / `--ink-faint`), hairlines (`--line` / `--line-soft`).
- **Accent = interaction, period.** `--navy` (IEEE navy) appears **only** on things you can act on — links, active tab, hover, résumé. Never decorative.
- **Layout:** thin hairline rules, 8px-ish spacing rhythm, generous whitespace, `--maxw: 1080px`.
- **Mode:** Light only.
- **No UI library, no Tailwind, no DaisyUI** — plain CSS in `src/styles/global.css`.

---

## Solo Project Notes

This is a solo project. No branching hierarchy, no PR process, no collab integrator. Work directly on `main` or feature branches as needed. Docs are kept current for Claude context continuity — not for team coordination.

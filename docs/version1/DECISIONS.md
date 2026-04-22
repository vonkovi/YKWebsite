---
# DECISIONS

Architectural Decision Log. Record the *why* behind key choices.

---

## ADR-001: Astro over Next.js
**Decision:** Use Astro as the framework.
**Reason:** Portfolio/blog is content-heavy and primarily static. Astro is purpose-built for this — less boilerplate, markdown-first, faster by default. Next.js is better when React component reuse and interactivity are the priority.
**Status:** Locked

---

## ADR-002: TypeScript
**Decision:** TypeScript over plain JavaScript.
**Reason:** Astro Content Collections use Zod schemas — TypeScript makes frontmatter type-safe across the whole site, catching broken content early.
**Status:** Locked

---

## ADR-003: Tailwind CSS
**Decision:** Tailwind for styling.
**Reason:** Fastest way to implement a consistent design system with the editorial/minimalist aesthetic. Works natively with Astro.
**Status:** Locked

---

## ADR-004: Light mode only
**Decision:** No dark mode toggle.
**Reason:** The beige/white/dark-grey palette is light-mode-native. Dark mode would require a second fully considered palette — unnecessary scope for now.
**Status:** Locked

---

## ADR-005: UI Component Library — DaisyUI v5
**Decision:** DaisyUI v5 (not v4 as originally planned).
**Reason:** `npx astro add tailwind` installs Tailwind v4, not v3. DaisyUI v4 requires Tailwind v3 — incompatible. DaisyUI v5 is the correct pairing for Tailwind v4. Config is CSS-based via `@plugin "daisyui"` in `global.css` instead of `tailwind.config.mjs`.
**Status:** Locked

---

## ADR-006: Typography
**Decision:** Playfair Display (headings) + DM Sans (body).
**Reason:** Playfair brings editorial weight; DM Sans keeps body text clean and restrained. Together they match the editorial × Japanese minimalism aesthetic.
**Status:** Locked

---

## ADR-007: Vercel for deployment
**Decision:** Deploy to Vercel.
**Reason:** Zero-config Astro deployment, free tier, custom domain support, instant previews.
**Status:** Locked

---

## ADR-008: Two navigation zones
**Decision:** Site splits into Portfolio (landing + /projects + /orgs) and Blog (/blog + /blog/[slug]).
**Reason:** Wireframe explicitly separates these as distinct experiences linked by a persistent nav button. No unified navbar — intentional editorial separation.
**Status:** Locked

---

## ADR-009: Two frontmatter flags — `featured` and `pinned`
**Decision:** `featured: boolean` controls whether an item appears in grids. `pinned: boolean` controls the top-left black tile treatment.
**Reason:** The black tile is manually curated — it's the hero item, not just "most recent." Separating the flags keeps that intent explicit and prevents accidental black tile promotion.
**Status:** Locked

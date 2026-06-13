// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — the custom apex domain served by GitHub Pages.
  site: 'https://yvonkim.com',
  // LaTeX math in MDX: `$inline$` / `$$block$$`, rendered to static HTML by KaTeX.
  // KaTeX stylesheet is loaded in BaseLayout.astro.
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [mdx()],
});

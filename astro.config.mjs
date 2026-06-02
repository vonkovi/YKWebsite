// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — the custom apex domain served by GitHub Pages.
  site: 'https://yvonkim.com',
  integrations: [mdx()],
});

import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site: siteUrl,
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  build: {
    format: 'directory',
  },
});

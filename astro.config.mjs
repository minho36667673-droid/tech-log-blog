import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// blog.config.js 에서 siteUrl을 가져와 사용
// Cloudflare Pages 환경변수로도 주입 가능
const siteUrl = process.env.SITE_URL || 'https://insure-guide.com';

export default defineConfig({
  site: siteUrl,
  integrations: [
    sitemap({
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  build: {
    format: 'directory',  // /blog/post-name/ 형식 URL (SEO 유리)
  },
});

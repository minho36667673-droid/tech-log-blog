import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import config from '../../blog.config.js';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: config.name,
    description: config.description,
    site: context.site || config.siteUrl,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map(post => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}/`,
        categories: [post.data.category, ...post.data.tags],
      })),
    customData: `<language>ko</language>`,
  });
}

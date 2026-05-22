// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { blogPosts } from './src/data/blog.ts';

const blogPostDateMap = Object.fromEntries(blogPosts.map(p => [p.slug, p.date]));

// https://astro.build/config
export default defineConfig({
  site: 'https://iinnovalux.lu',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/mentions-legales'),
    serialize(item) {
      // Use actual post date for blog posts, build date for everything else
      const blogSlug = item.url.match(/\/blog\/([^/]+)/)?.[1];
      item.lastmod = blogSlug && blogPostDateMap[blogSlug]
        ? blogPostDateMap[blogSlug]
        : new Date().toISOString().split('T')[0];

      if (item.url === 'https://iinnovalux.lu/' || item.url === 'https://iinnovalux.lu') {
        item.priority = 1.0;
        item.changefreq = 'weekly';
      } else if (item.url.includes('/services/')) {
        item.priority = 0.9;
        item.changefreq = 'monthly';
      } else if (item.url === 'https://iinnovalux.lu/bricoleur-luxembourg') {
        item.priority = 0.9;
        item.changefreq = 'monthly';
      } else if (item.url.includes('/blog/')) {
        item.priority = 0.7;
        item.changefreq = 'monthly';
      } else {
        item.priority = 0.6;
        item.changefreq = 'monthly';
      }
      return item;
    }
  })]
});

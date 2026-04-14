// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
      // Add lastmod to all sitemap entries
      item.lastmod = new Date().toISOString().split('T')[0];
      // Boost priority of service and home pages
      if (item.url === 'https://iinnovalux.lu/' || item.url === 'https://iinnovalux.lu') {
        item.priority = 1.0;
        item.changefreq = 'weekly';
      } else if (item.url.includes('/services/')) {
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

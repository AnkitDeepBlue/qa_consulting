// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update SITE_URL once a custom domain is connected in Vercel.
export default defineConfig({
  site: process.env.SITE_URL || 'https://ankit-qa-consulting.vercel.app',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});

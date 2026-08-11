import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react(), mdx()],
  site: 'https://hassan404.github.io',
  base: process.env.DEPLOY_BASE || '/',
  devToolbar: { enabled: false },
});

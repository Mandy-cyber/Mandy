// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mandilocs.com',
  base: '/',
  output: 'static',
  build: {
    assets: 'static'
  }
});

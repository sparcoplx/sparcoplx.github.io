import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.fvilches.cl',
  output: 'static',
  compressHTML: true,
  build: {
    // El CSS es pequeño (~8 KB): va dentro del HTML y se ahorra una petición.
    inlineStylesheets: 'always',
  },
});

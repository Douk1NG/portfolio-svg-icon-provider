import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react(), svgr({ include: "**/*.svg" })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'portfolio-svg-icon-provider': path.resolve(__dirname, '../src'),
    },
  },
  server: {
    port: 4173,
  },
});

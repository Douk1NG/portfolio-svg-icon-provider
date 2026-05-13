import { defineConfig } from 'vitest/config';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: true,
        titleProp: true,
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});

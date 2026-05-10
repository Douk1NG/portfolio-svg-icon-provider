import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname),
  resolve: {
    alias: [
      { find: 'portfolio-svg-icon-provider/components', replacement: path.resolve(__dirname, '../src/components') },
      { find: 'portfolio-svg-icon-provider', replacement: path.resolve(__dirname, '../src/index.ts') },
    ],
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  server: {
    port: 4173,
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === 'INEFFECTIVE_DYNAMIC_IMPORT' ||
          warning.code === 'PLUGIN_TIMINGS'
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
});

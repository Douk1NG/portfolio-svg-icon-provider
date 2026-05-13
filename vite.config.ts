import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import dts from 'vite-plugin-dts';
import fs from 'fs';

const componentsDir = path.resolve(__dirname, 'src/components');
const componentFiles = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.tsx'));

const entries: Record<string, string> = {
  index: path.resolve(__dirname, 'src/index.ts'),
};

componentFiles.forEach(file => {
  const name = file.replace('.tsx', '');
  entries[`components/${name}`] = path.resolve(componentsDir, file);
});

// Also include dynamic components and hooks as separate entries if needed, 
// but index.ts exports them and they will be part of the index chunk or their own.
// To keep the dist structure clean and support the dynamic imports in DynamicIconLoad:
entries['components/dynamic/DynamicIconLoad'] = path.resolve(__dirname, 'src/components/dynamic/DynamicIconLoad.tsx');

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
    dts({
      insertTypesEntry: true,
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: entries,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: true,
    minify: false,
    emptyOutDir: true,
  },
});

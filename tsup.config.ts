import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/components/*.tsx', 'src/hooks/*.ts', 'src/types/**/*.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  bundle: true,
  minify: false,
  external: ['react'],
});

import { defineConfig } from 'tsup';
import svgr from 'esbuild-plugin-svgr';

export default defineConfig({
  entry: ['src/components/*.tsx', 'src/hooks/*.ts', 'src/types/**/*.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  bundle: true,
  minify: false,
  esbuildPlugins: [svgr()],
  external: ['react'],
});

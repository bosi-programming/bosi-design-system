/// <reference types="vitest/config" />
import { join, resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'node:url';

const filesNeedToExclude = ['lib/Svelte/*', 'lib/svelte.ts', 'lib/svelte.d.ts'];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

console.log(filesPathToExclude);

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Add Svelte plugin for testing Svelte components
    mode === 'test' && svelte({ hot: false }),
    tailwindcss(),
    dts({ rollupTypes: true }), // Output .d.ts files
  ].filter(Boolean),
  build: {
    outDir: './react-dist',
    cssCodeSplit: true,
    target: 'esnext',
    minify: false,
    lib: {
      entry: [resolve(__dirname, join('lib', 'react.ts')), resolve(__dirname, join('lib', 'global.css'))],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : format}`,
      cssFileName: 'style',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ['react/jsx-runtime', 'react', 'react-dom', 'svelte', 'svelte/internal', ...filesPathToExclude],
      output: {
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './lib/React/test/setup.ts',
    coverage: {
      all: false,
      enabled: true,
    },
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : undefined,
  },
}));

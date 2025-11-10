/// <reference types="vitest/config" />
import { join, resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ rollupTypes: true }), // Output .d.ts files
  ],
  build: {
    outDir: "./react-dist",
    cssCodeSplit: true,
    target: "esnext",
    minify: false,
    lib: {
      entry: [resolve(__dirname, join("lib", "react.ts")), resolve(__dirname, join("lib", "global.css"))],
      fileName: (format, entryName) => `${entryName}.${format === "es" ? "js" : format}`,
      cssFileName: "style",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ["react/jsx-runtime", "react", "react-dom", "svelte", "svelte/internal"],
      output: {
        globals: {
          svelte: "Svelte",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./lib/test/setup.ts",
    coverage: {
      all: false,
      enabled: true,
    },
  },
});

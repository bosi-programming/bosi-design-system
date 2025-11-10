/// <reference types="vitest/config" />
import { join, resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ rollupTypes: true }), // Output .d.ts files
    svelte(),
  ],
  build: {
    cssCodeSplit: true,
    target: "esnext",
    minify: false,
    lib: {
      entry: [
        resolve(__dirname, join("lib/React", "react.ts")),
        resolve(__dirname, join("lib/Svelte", "svelte.ts")),
        resolve(__dirname, join("lib", "global.css")),
      ],
      fileName: (format, entryName) => `${entryName}.${format}`,
      cssFileName: "style",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ["react/jsx-runtime", ...Object.keys(peerDependencies)],
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

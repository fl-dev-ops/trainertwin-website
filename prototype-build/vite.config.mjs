import { defineConfig } from "vite";
import tailwind from "@tailwindcss/postcss";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/**
 * The "storybook-build" prototype: the V3 app rebuilt from the Storybook components in src/components.
 * Bundles prototype-build/ into onboarding-prototype/storybook-build/ so the existing static server
 * (python http.server 8791, root onboarding-prototype) serves it at /storybook-build/index.html.
 * It never reads or writes onboarding-prototype/v3.
 */
export default defineConfig({
  root: here,
  base: "./",
  publicDir: false,
  resolve: { alias: { "@components": path.resolve(here, "../src/components") } },
  esbuild: { jsx: "automatic" },
  css: { postcss: { plugins: [tailwind()] } },
  build: {
    outDir: path.resolve(here, "../onboarding-prototype/storybook-build"),
    emptyOutDir: true,
    sourcemap: true,
    chunkSizeWarningLimit: 1500,
  },
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
});

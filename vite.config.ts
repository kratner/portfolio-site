import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Transform all .svg imports as React components (preserves CRA-style behaviour)
      include: "**/*.svg",
    }),
  ],
  // Required for GitHub Pages sub-path deployment (matches homepage in package.json)
  base: "/portfolio-site/",
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});

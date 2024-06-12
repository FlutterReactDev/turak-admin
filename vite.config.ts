import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), sentryVitePlugin({
    org: "turak",
    project: "javascript-react"
  })],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: true
  }
});
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist'
  }
})
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    css: {
      devSourcemap: false,
    },
    // 🚨 THIS STOPS FONT AUTO-INJECTION BEHAVIOR
    ssr: {
      noExternal: ["@fontsource/*"],
    },
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      bootstrap: "bootstrap/dist/css/bootstrap.min.css",
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});

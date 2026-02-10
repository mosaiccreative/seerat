import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Only keep React in an eager chunk; motion and radix
          // are loaded via lazy routes / dynamic imports so they
          // naturally code-split without forcing them into an
          // up-front bundle that delays TTI.
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
}));

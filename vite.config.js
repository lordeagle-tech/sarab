import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    allowedHosts: ['sarab-rgwh.onrender.com'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

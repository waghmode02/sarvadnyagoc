import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure that Vite serves your app from the root
  build: {
    outDir: 'dist', // Output directory for the build files
    rollupOptions: {
      input: {
        main: join(__dirname, 'index.html') // Main entry point for the build
      }
    }
  }
});

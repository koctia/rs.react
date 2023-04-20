/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'src/interface/*',
        'src/data/*',
        'server.tsx',
        'src/server.tsx',
        'src/index.tsx',
      ],
      all: true,
      provider: 'c8',
      reporter: 'text',
    },
    setupFiles: ['./src/setupTests.ts'],
  },
});

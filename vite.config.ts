/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        '*.{cjs,config.cjs,cy.ts,config.ts}',
        'server.tsx',
        'cypress/**/*.{cy.ts,ts}',
        'src/**/*.{js,jsx}',
        'src/interface/',
        'src/data/',
        'src/store/',
        'src/index.tsx',
      ],
      all: true,
      provider: 'c8',
    },
    setupFiles: ['./src/setupTests.ts'],
  },
});

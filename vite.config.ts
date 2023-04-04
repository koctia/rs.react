/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        ...configDefaults.coverage.exclude,
        'src/**/*.{js,jsx}',
        'src/interface/',
        'src/index.tsx',
      ],
      all: true,
      provider: 'c8',
    },
    setupFiles: ['./src/setupTests.ts'],
  },
});

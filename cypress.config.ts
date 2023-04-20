import { defineConfig } from 'cypress';
// import coverage from '@cypress/code-coverage/task';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      // coverage(on, config);
      return config;
    },
  },
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  video: false,
});

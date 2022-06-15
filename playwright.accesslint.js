import { devices } from '@playwright/test';

const config = {
  testMatch: 'src/**/playwright_accesslint/*.test.js',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    headless: false,
    actionTimeout: 0,
  },
  projects: [
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
  outputDir: 'test-results/',
};

export default config;

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false, // Run tests sequentially to avoid server overload
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1, // Retry once locally to handle flaky timeouts
  workers: 1, // Single worker to reduce server load
  reporter: 'html',
  timeout: 90000, // 90s test timeout for multi-page tests

  use: {
    baseURL: 'http://localhost:4173', // VitePress preview port
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    navigationTimeout: 60000, // 60s navigation timeout
    actionTimeout: 30000, // 30s action timeout
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      retries: 2, // Firefox needs more retries due to slower page loads
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Mobile viewports
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  webServer: {
    command: 'npm run docs:preview',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});

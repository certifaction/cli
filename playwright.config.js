import { defineConfig, devices } from '@playwright/test';

const allProjects = [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
];

const defaultProjects = ['chromium', 'Mobile Chrome'];
const requestedBrowsers = process.env.BROWSERS
  ? process.env.BROWSERS.split(',').map(b => b.trim())
  : defaultProjects;

const projects = requestedBrowsers.includes('all')
  ? allProjects
  : allProjects.filter(p => requestedBrowsers.includes(p.name));

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: 2,
  reporter: 'html',
  timeout: 60000,

  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    navigationTimeout: 30000,
    actionTimeout: 15000,
  },

  projects,

  webServer: {
    command: 'npm run docs:preview',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});

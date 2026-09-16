// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  timeout: 50 * 1000,        //to control the entire project timeout 
  expect: {                //expect is only for assertion timeout
    timeout: 60 * 1000,
  },

  workers: 3,
  // retries:2,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  fullyParallel: true,
  projects: [{
    name: "chrome_project",
    use: {
      browserName: 'chromium',
      viewport: {
        height: 500,
        width: 500
      },
      headless: false,
       permissions: ['notifications', 'camera', 'geolocation', 'microphone']


    },
  },
  {
    name: "firefox_project",
    use: {
      browserName: 'firefox',
      headless: false,
      ...devices['Galaxy S24'],
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
      permissions:['geolocation'],
      /*geolocation:{
       latitude:9.9,
       longitude:1.6,
       }*/
      ignoreHTTPSErrors: true
    },

  },
  {
    name: "webkit_project",
    use: {
      browserName: 'webkit',
      headless: false,
     
    },
  }]
  /* Configure projects for major browsers */

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});


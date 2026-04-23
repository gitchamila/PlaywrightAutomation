import { defineConfig, devices, expect } from '@playwright/test';

const config = ({
  testDir: './tests',
  retries : 1,
  reporter: 'html',
  timeout: 30 * 1000,

  expect: {
    timeout: 5000
  },  
 
  use: {
    headless: false,
    browserName: 'chromium',
  },


});
module.exports = config;


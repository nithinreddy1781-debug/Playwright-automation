const {devices} = require('@playwright/test')

/**
 * @See https://playwright.dev/docs/test-configuration.
 */
const Config = ({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  reporter: "html",
  use: {
    browserName: "chromium",
    headless: false
  },
});
module.exports = Config

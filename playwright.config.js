const {defineConfig, devices} = require("@playwright/test");

module.exports = defineConfig({
    testDir: './tests',
    testMatch: '**/*.spec.ts',
    projects: [
        {
            name: "chromium",
            use: {
               ...devices["Desktop Chrome"]}
        
        },
    ],
    use: {
      baseURL:'https://the-internet.herokuapp.com',
      actionTimeout: 5 * 1000,
      headless: false,
    }
});


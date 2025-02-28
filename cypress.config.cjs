const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    supportFile: false,
    env: {
      NODE_ENV: "test",  // ✅ Manually define environment variables
    },
    setupNodeEvents(on, config) {
      // No event listeners needed for now
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: false,
  },
});
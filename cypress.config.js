const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001", // Ensure this matches your app's port
    setupNodeEvents(on, config) {
      // No event listeners needed for now
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: false, // Prevents Cypress from looking for unnecessary files
  },
});
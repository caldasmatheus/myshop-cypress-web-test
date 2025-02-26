const { defineConfig } = require("cypress");

module.exports = defineConfig({
  hideXHRInCommandLog: true,
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'http://www.automationpractice.pl/index.php',

    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      {
        true
      }
    },
  },
})

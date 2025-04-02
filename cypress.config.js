import { defineConfig } from 'cypress'

export default defineConfig({
   hideXHRInCommandLog: true,
   e2e: {
      viewportWidth: 1920,
      viewportHeight: 1080,
      baseUrl: 'http://www.automationpractice.pl/index.php',

      setupNodeEvents(on, config) {
         return config
      },
   },
})
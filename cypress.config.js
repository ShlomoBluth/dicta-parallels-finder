const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://parallels-dev--parallels-finder.netlify.app/',
    LIVE_URL: 'https://parallels-finder.netlify.app/',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('./dicta-shared/videoCleanup')(on)
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://parallels-finder.netlify.app/',
    // toolTests load the page and upload the file once, then each test builds on the previous one
    testIsolation: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})

const { defineConfig } = require('cypress')
const cypressExpose = require('./index')

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
      cypressExpose(config)
      // IMPORTANT: return the config object
      return config
    },
  },
})

// @ts-check
const camel = require('to-camel-case')

/**
 * @param {Cypress.PluginConfigOptions} config
 */
function cypressExpose(config) {
  config.expose = config.expose || {}

  console.log(config.env)

  Object.entries(config.env).forEach(([key, value]) => {
    if (key.startsWith('EXPOSE_')) {
      const name = key.replace('EXPOSE_', '')
      const normalizedName = camel(name)
      config.expose[normalizedName] = value
      delete config.env[key]
    }
    // same for lower case "expose" prefix
    else if (key.startsWith('expose')) {
      const name = key.replace('expose', '')
      const normalizedName = camel(name)
      config.expose[normalizedName] = value
      delete config.env[key]
    }
  })
}

module.exports = cypressExpose

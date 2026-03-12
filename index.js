// @ts-check
const camel = require('to-camel-case')

/**
 * @param {Cypress.PluginConfigOptions} config
 */
function cypressExpose(config) {
  config.expose = config.expose || {}

  // console.log(config.env)

  Object.entries(config.env).forEach(([key, value]) => {
    if (key.startsWith('EXPOSE_')) {
      const name = key.replace('EXPOSE_', '')
      const normalizedName = camel(name)
      config.expose[normalizedName] = value
      // we cannot simply delete the key,
      // since Cypress will just use previous value
      // so we overwrite it with null
      config.env[key] = null
    }
    // same for lower case "expose" prefix
    else if (key.startsWith('expose')) {
      const name = key.replace('expose', '')
      const normalizedName = camel(name)
      config.expose[normalizedName] = value
      config.env[key] = null
    }
  })

  console.log('env')
  console.log(config.env)
}

module.exports = cypressExpose

module.expose = function (config) {
  config.expose = config.expose || {}

  Object.entries(config.env).forEach(([key, value]) => {
    if (key.startsWith('EXPOSE_')) {
      const name = key.replace('EXPOSE_', '')
      const normalizedName = camel(name)
      config.expose[normalizedName] = value
      delete config.env[key]
    }
  })
}

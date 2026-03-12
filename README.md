# cypress-expose

> Expose public variables via CYPRESS_EXPOSE process variables

## Install

```shell
$ npm i -D cypress-expose
```

## Use

Any `env` variable that starts with `CYPRESS_EXPOSE` will be cast and normalized

```js
const { defineConfig } = require('cypress')
const cypressExpose = require('cypress-expose')

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      cypressExpose(config)

      // IMPORTANT: return the config object
      // to let Cypress know we modified it
      return config
    },
  },
})
```

Pass any variables that you are OK with being public using the `CYPRESS_EXPOSE` prefix:

```
CYPRESS_EXPOSE_foo=42 npx cypress run
```

The above execution will have `Cypress.expose('foo') // 42`

This makes is especially convenient to pass config / CI variables that are not exposed by default

```yml
# GitHub Actions
- name: Run tests 🧪
  # https://github.com/cypress-io/github-action
  uses: cypress-io/github-action@v7
  env:
    # note: the variables will be normalized to camel case
    CYPRESS_EXPOSE_PUBLIC_VARIABLE_1: foo
    CYPRESS_EXPOSE_PUBLIC_VARIABLE_2: bar
    CYPRESS_EXPOSE_PUBLIC_VARIABLE_3: baz
    # default CI variable
    CYPRESS_EXPOSE_CI: true
    CYPRESS_EXPOSE_CI_NAME: 'GitHub Actions'
```

The above example will have `Cypress.expose()` include the following object

```js
Cypress.expose()
// {
//   publicVariable1: 'foo'
//   publicVariable2: 'bar'
//   publicVariable3: 'baz'
//   ci: true
//   ciName: 'GitHub Actions'
// }
```

## Examples

- [bahmutov/cypress-expose-example](https://github.com/bahmutov/cypress-expose-example)

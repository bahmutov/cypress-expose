/// <reference types="cypress" />

// you can remove an exposed variable before any tests even begin

Cypress.expose('publicVariable1', undefined)

it('does not have publicVariable1 anymore', () => {
  expect(Cypress.expose('publicVariable1')).to.be.undefined
})

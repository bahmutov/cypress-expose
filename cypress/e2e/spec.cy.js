/// <reference types="cypress" />

describe('cypress-expose', () => {
  it('has camel case exposed variables', () => {
    expect(Cypress.expose('publicVariable1'), 'variable 1').to.equal(
      'foo',
    )
    expect(Cypress.expose('publicVariable2'), 'variable 2').to.equal(
      'bar',
    )
    expect(Cypress.expose('publicVariable3'), 'variable 3').to.equal(
      'baz',
    )
  })

  it('deletes the exposed variables from cy.env', () => {
    cy.env(['me']).should('deep.equal', {})
    cy.wrap(Cypress).invoke('expose', 'me').should('equal', true)
  })
})

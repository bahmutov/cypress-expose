/// <reference types="cypress" />

// only run these tests on CI
if (Cypress.expose('ci')) {
  describe('cypress-expose', () => {
    it('has CI variable exposed', () => {
      expect(Cypress.expose('ci'), 'CI variable').to.equal(true)
      expect(Cypress.expose('ciName'), 'CI name variable').to.equal(
        'GitHub Actions',
      )
    })
  })
}

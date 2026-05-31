describe('First Cypress test', () => {
  it('visits the example site', () => {
    cy.visit('/')
    cy.contains('Kitchen Sink')
  })
})

describe('E2e tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Visits the app root url', () => {
    cy.contains('h1.main', 'Shopping cart');
    cy.screenshot();
  });
});

describe('test index page', function () {
  it('test index page', function () {
    cy.visit('/');
    cy.get('nav .login-btn').should('contain', 'Log In');
  });
});

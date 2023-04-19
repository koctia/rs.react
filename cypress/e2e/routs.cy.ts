describe('routs', () => {
  it('should routs menu', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });

  it('should redirect to 404 page', () => {
    cy.visit('/404');
    cy.get('h2').should('contain', 'Not Found');
  });

  it('end', () => {
    expect(true).to.equal(true);
  });
});

describe('about test', () => {
  it('should get to the page about', () => {
    cy.visit('/about');
    cy.get('div');
  });

  it('should be name page', () => {
    cy.visit('/about');
    cy.get('.main__title-about').should('contain', 'About');
  });

  it('end', () => {
    expect(true).to.equal(true);
  });
});

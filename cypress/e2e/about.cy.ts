describe('about test', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should get to the page about', () => {
    cy.get('div');
  });

  it('should be name page', () => {
    cy.get('.main__title-about').should('contain', 'About');
  });

  it('end', () => {
    expect(true).to.equal(true);
  });
});

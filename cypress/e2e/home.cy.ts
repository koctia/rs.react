describe('home test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('page processing the home', () => {
    cy.get('div');
  });

  it('should be name page', () => {
    cy.get('.header__header-name').should('contain', 'Home');
  });

  it('should fill in search', () => {
    cy.get('.main__search').type('far').should('have.value', 'far');
  });

  it('searches by count cards and pressing ENTER', () => {
    cy.get('.main__search').should('be.visible').type('far{enter}');
    cy.get('.cards__block').should('have.length', 3);
  });

  it('should open modal window', () => {
    cy.get('.cards__btn').contains('more').click();
    cy.get('.modal__box').should('be.visible');
  });

  it('end', () => {
    expect(true).to.equal(true);
  });
});

describe('form test', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should get to the page form', () => {
    cy.get('form');
  });

  it('should fill in first_name', () => {
    cy.get('input[name="first_name"]').type('Paws').should('have.value', 'Paws');
  });

  it('should fill in last_name', () => {
    cy.get('input[name="last_name"]').type('Cats').should('have.value', 'Cats');
  });

  it('should be selected birthday', () => {
    cy.get('#birthday').type('2020-11-15').should('have.value', '2020-11-15');
  });

  it('should be selected option', () => {
    cy.get('#breeds').select('Bengal').should('have.value', 'Bengal');
  });

  it('should be selected checkbox', () => {
    cy.get('#isgender').check();
  });

  it('unchecks them gender', () => {
    cy.get('#isgender').check();
    cy.wait(1000);
    cy.get('#isgender:checked').uncheck();
  });

  it('should fill in cost', () => {
    cy.get('input[name="cost"]').type('4578').should('have.value', '4578');
  });

  it('should be selected radio', () => {
    cy.get('[type="radio"]').check('Breeder');
  });

  it('should be upload file', () => {
    cy.get('input[type="file"]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.png',
      lastModified: Date.now(),
    });
  });

  it('should fill in email', () => {
    cy.get('input[name="email"]').type('paws@dev.dev').should('have.value', 'paws@dev.dev');
  });

  it('submits', () => {
    cy.get("input[type='submit']").click();
  });

  it('end', () => {
    expect(true).to.equal(true);
  });
});

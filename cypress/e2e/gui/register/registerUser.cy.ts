describe('Register user', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('register a new user', () => {
    cy.createRandomUser().then((user) => {
      cy.registerNewUser(user);
      cy.get('.alert.alert-success').invoke('text').then((text) => {
        expect(text.trim()).to.equal('Your account has been created.');
      });
    });
  });
});
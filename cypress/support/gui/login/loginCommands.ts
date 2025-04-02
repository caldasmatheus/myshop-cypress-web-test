Cypress.Commands.add('loginPortal', (username: string, password: string) => {
   cy.get('#email').type(username);
   cy.get('#passwd').type(password);
   cy.get('#SubmitLogin').click();
});
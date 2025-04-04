Cypress.Commands.add('accessWomenMenu', () => {
   cy.get('.sf-menu > li > a[title="Women"]').click();
   cy.url().should('include', 'id_category=3');
});

Cypress.Commands.add('verifyProductsExist', () => {
   cy.get('.product-container').should('have.length.gt', 0);
});

Cypress.Commands.add('clickRandomProduct', () => {
   cy.get('.product-container')
      .its('length')
      .then((n) => {
         const randomIndex = Math.floor(Math.random() * n);
         cy.get('.product-container').eq(randomIndex).find('.product-name').click();
      });
});

Cypress.Commands.add('verifyProductPage', () => {
   cy.get('#short_description_content').should('exist').and('not.be.empty');
   cy.get('#our_price_display').should('exist').and('not.be.empty');
   cy.get('#bigpic').should('be.visible');
});

Cypress.Commands.add('productSearch', () => {
   cy.accessWomenMenu()
   cy.verifyProductsExist()
   cy.clickRandomProduct()
   cy.verifyProductPage()
});
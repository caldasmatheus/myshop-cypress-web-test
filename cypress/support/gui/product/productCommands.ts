Cypress.Commands.add('accessWomenMenu', () => {
   cy.get('.sf-menu > li > a[title="Women"]').click();
});

Cypress.Commands.add('getRandomProductName', () => {
   return cy.get('.product-name')
      .then($elements => {
         const randomIndex = Math.floor(Math.random() * $elements.length);
         return $elements.eq(randomIndex).text().trim();
      });
});

Cypress.Commands.add('searchProduct', (productName) => {
   cy.get('#search_query_top').type(productName || 'test');
   cy.get('#searchbox > .btn').click();
});

Cypress.Commands.add('verifySearchResults', (productName) => {
   cy.get('.product-listing').should('be.visible');
   cy.get('.product-name').should('contain', productName || 'test');
});

Cypress.Commands.add('clickOnProduct', (productName) => {
   cy.get('.product-name').contains(productName).click();
});

Cypress.Commands.add('verifyProductPage', (productName) => {
   cy.get('h1[itemprop="name"]').should('contain', productName);
   cy.get('#short_description_content').should('exist').and('not.be.empty');
   cy.get('#our_price_display').should('exist').and('not.be.empty');
});

Cypress.Commands.add('performProductSearch', (productName) => {
   cy.accessWomenMenu();
   cy.searchProduct(productName);
   cy.verifySearchResults(productName);
   cy.clickOnProduct(productName);
   cy.verifyProductPage(productName);
});
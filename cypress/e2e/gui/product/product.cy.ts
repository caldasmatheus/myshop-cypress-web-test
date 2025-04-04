describe('Product Navigation and Verification', () => {
   beforeEach(() => {
      cy.visit('/');
   });

   it('should verify that products exist on the Women category page', () => {
      cy.accessWomenMenu();
      cy.verifyProductsExist();
   });

   it('should navigate to Women category, select a random product, and verify product details', () => {
      cy.accessWomenMenu()
      cy.verifyProductsExist()
      cy.clickRandomProduct()
      cy.verifyProductPage()
   });
});
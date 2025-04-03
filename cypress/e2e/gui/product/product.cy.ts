describe('Product Search', () => {
   beforeEach(() => {
      cy.visit('/');
   });

   it('should search for a product from Women category and verify product details', () => {
      cy.getRandomProductName().then((selectedProductName) => {
         cy.performProductSearch(selectedProductName);
      });
   });
});
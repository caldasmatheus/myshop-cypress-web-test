describe('Meu Primeiro Teste', () => {
    it('Visita a página inicial', () => {
      cy.visit('http://www.automationpractice.pl/index.php');
      cy.title().should('include', 'My Shop');
    });
});
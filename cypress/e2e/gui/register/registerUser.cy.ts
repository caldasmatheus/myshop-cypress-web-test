import addressFixture from '../../../fixtures/address.json';

describe('User Registration and Address Management', () => {
   beforeEach(() => {
      cy.visit('/');
   });

   it('should register a new user successfully', () => {
      cy.createRandomUser().then((user) => {
         cy.registerNewUser(user);
         cy.get('.alert.alert-success').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Your account has been created.');
         });
         cy.get('.account').should('contain', `${user.firstName} ${user.lastName}`);
      });
   });

   it('should add a new address to the user account', () => {
      cy.createRandomUser().then((user) => {
         cy.registerNewUser(user);
         cy.clickMenuUser();
         cy.addNewAddress('address1').then((address) => {
            cy.verifyAddress(address, addressFixture.address1);
            cy.contains(address.alias).should('be.visible');
         });
      });
   });
});
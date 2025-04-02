import addressFixture from '../../../fixtures/address.json';

Cypress.Commands.add('navigateToAddresses', () => {
   cy.contains('My addresses').click();
});

Cypress.Commands.add('clickAddNewAddress', () => {
   cy.contains('Add a new address').click();
});

Cypress.Commands.add('insertStreet', (street: string) => {
   cy.get('#address1').type(street);
});

Cypress.Commands.add('insertCity', (city: string) => {
   cy.get('#city').type(city);
});

Cypress.Commands.add('selectState', (state: string) => {
   cy.get('#id_state').select(state);
});

Cypress.Commands.add('insertPostcode', (postcode: string) => {
   cy.get('#postcode').type(postcode);
});

Cypress.Commands.add('insertPhone', (phone: string) => {
   cy.get('#phone').type(phone);
});

Cypress.Commands.add('insertMobile', (mobile: string) => {
   cy.get('#phone_mobile').type(mobile);
});

Cypress.Commands.add('insertAlias', (alias: string) => {
   cy.get('#alias').clear().type(alias);
});

Cypress.Commands.add('submitAddress', () => {
   cy.get('#submitAddress').click();
});

Cypress.Commands.add('addNewAddress', (addressAlias: 'address1' | 'address2') => {
   interface Address {
      street: string;
      city: string;
      state: string;
      postcode: string;
      phone: string;
      mobile: string;
      alias: string;
   }

   const address: Address = addressFixture[addressAlias];

   cy.navigateToAddresses();
   cy.clickAddNewAddress();
   cy.insertStreet(address.street);
   cy.insertCity(address.city);
   cy.selectState(address.state);
   cy.insertPostcode(address.postcode);
   cy.insertPhone(address.phone);
   cy.insertMobile(address.mobile);
   cy.insertAlias(address.alias);
   cy.submitAddress();

   return cy.wrap(address);
});

Cypress.Commands.add('verifyAddress', (actualAddress, expectedAddress) => {
   expect(actualAddress.street).to.equal(expectedAddress.street);
   expect(actualAddress.city).to.equal(expectedAddress.city);
   expect(actualAddress.state).to.equal(expectedAddress.state);
   expect(actualAddress.postcode).to.equal(expectedAddress.postcode);
   expect(actualAddress.phone).to.equal(expectedAddress.phone);
   expect(actualAddress.mobile).to.equal(expectedAddress.mobile);
   expect(actualAddress.alias).to.equal(expectedAddress.alias);
});
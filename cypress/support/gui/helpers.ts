/// <reference types="cypress" />

declare namespace Cypress {
   interface Chainable {
      createRandomUser(): Chainable<{
         firstName: string;
         lastName: string;
         email: string;
         password: string;
         birthDay: string;
         birthMonth: string;
         birthYear: string
      }>;
   }
}

declare namespace Cypress {
   interface Chainable<Subject = any> {
      addNewAddress(addressAlias: 'address1' | 'address2'): Chainable<{
         street: string;
         city: string;
         state: string;
         postcode: string;
         phone: string;
         mobile: string;
         alias: string;
      }>;
   }
}
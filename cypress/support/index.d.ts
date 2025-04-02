declare namespace Cypress {
   interface Chainable<Subject = any> {
      clickMenuContactUs(): Chainable<void>;
      clickMenuSignIn(): Chainable<void>;
      clickMenuSignOut(): Chainable<void>;
      clickMenuUser(): Chainable<void>;
      insertEmail(email: string): Chainable<void>;
      clickBtnCreateAnAccount(): Chainable<void>;
      selectTitle(): Chainable<void>;
      insertFirstName(firstName: string): Chainable<void>;
      insertLastName(lastName: string): Chainable<void>;
      insertPassword(password: string): Chainable<void>;
      selectBirthDate(day: number, month: number, year: number): Chainable<void>;
      clickBtnRegister(): Chainable<void>;
      registerNewUser(user: any): Chainable<void>;
      loginPortal(username: string, password: string): Chainable<void>;
      navigateToAddresses(): Chainable<void>;
      clickAddNewAddress(): Chainable<void>;
      insertStreet(street: string): Chainable<void>;
      insertCity(city: string): Chainable<void>;
      selectState(state: string): Chainable<void>;
      insertPostcode(postcode: string): Chainable<void>;
      insertPhone(phone: string): Chainable<void>;
      insertMobile(mobile: string): Chainable<void>;
      insertAlias(alias: string): Chainable<void>;
      submitAddress(): Chainable<void>;
      verifyAddress(actualAddress: Cypress.Address, expectedAddress: Cypress.Address): Chainable<void>;
   }
}
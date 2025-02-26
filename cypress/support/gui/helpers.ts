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
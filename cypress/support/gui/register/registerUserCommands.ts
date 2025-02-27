import { faker } from '@faker-js/faker';

Cypress.Commands.add('insertEmail', (email) => {
  cy.get('#email_create').type(email);
});

Cypress.Commands.add('clickBtnCreateAnAccount', () => {
  cy.get('#SubmitCreate').click();
});

Cypress.Commands.add('selectTitle', () => {
  cy.get('#id_gender1').check();
});

Cypress.Commands.add('insertFirstName', (firstName) => {
  cy.get('#customer_firstname').type(firstName);
});

Cypress.Commands.add('insertLastName', (lastName) => {
  cy.get('#customer_lastname').type(lastName);
});

Cypress.Commands.add('insertPassword', (password) => {
  cy.get('#passwd').type(password);
});

Cypress.Commands.add('selectBirthDate', (day, month, year) => {
    cy.get('select#days').select(day);
    cy.get('select#months').select(month);
    cy.get('select#years').select(year);
});

Cypress.Commands.add('clickBtnRegister', () => {
  cy.get('#submitAccount').click();
});

Cypress.Commands.add('registerNewUser', (user) => {
  cy.clickMenuSignIn();
  cy.insertEmail(user.email);
  cy.clickBtnCreateAnAccount();
  cy.selectTitle();
  cy.insertFirstName(user.firstName);
  cy.insertLastName(user.lastName);
  cy.insertPassword(user.password);
  cy.selectBirthDate(user.birthDay, user.birthMonth, user.birthYear);
  cy.clickBtnRegister();
});

Cypress.Commands.add('createRandomUser', (): Cypress.Chainable<{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
}> => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return cy.wrap({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'senhasegura123',
    birthDay: faker.number.int({ min: 1, max: 28 }).toString(),
    birthMonth: faker.helpers.arrayElement(months),
    birthYear: faker.number.int({ min: 1950, max: 2000 }).toString(),
  });
});
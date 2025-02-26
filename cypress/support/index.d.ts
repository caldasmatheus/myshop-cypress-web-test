declare namespace Cypress {
    interface Chainable<Subject = any> {
        clickBtnSignIn(): Chainable<void>;
        insertEmail(email): Chainable<void>;
        clickBtnCreateAnAccount(): Chainable<void>;
        selectTitle(): Chainable<void>;
        insertFirstName(firstName): Chainable<void>;
        insertLastName(lastName): Chainable<void>;
        insertPassword(password): Chainable<void>;
        selectBirthDate(day, month, year): Chainable<void>;
        clickBtnRegister(): Chainable<void>;
        registerNewUser(user): Chainable<void>;
    }
}
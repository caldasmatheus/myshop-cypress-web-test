import { USER } from '../../../fixtures/constLogin';

describe('Login system', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('login user', () => {
        cy.clickMenuSignIn();
        cy.loginPortal(USER.username, USER.password);
        cy.get('.page-heading').should('have.text', 'My account');
        cy.get('.info-account').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Welcome to your account. Here you can manage all of your personal information and orders.');
        });
    });
});
/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage"

describe ('Login', () => {

    it('01- Login with valid data - successfull', () => {

        cy.intercept({
            method: 'POST',
            url: ' https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('successfullLogin');

        cy.visit('/login');
        cy.url().should('contains','/login');
        loginPage.loginHeading.should('have.text', 'Log in with your existing account');
        loginPage.login('qa1307@test.com','tester987');

        cy.wait('@successfullLogin').then(interception=> {
            console.log('RESPONSE', interception);
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.statusMessage).eq("OK");

    })

})

})

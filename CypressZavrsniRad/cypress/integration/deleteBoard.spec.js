/// <reference types="Cypress" />

import { deleteBoard }from "../page_objects/deleteBoard"


describe('Delete Board', () => {

    beforeEach('Visit login page',() => {
    cy.loginViaBackend();
    cy.visit('/boards/8013');
    })

    it('Delete board', () => {

        cy.intercept({
            method: 'GET',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/8013'
        }).as('successfullDelete');

        deleteBoard.delete();

        cy.wait('@successfullDelete').then(interception=> {
            console.log('RESPONSE', interception);
            expect(interception.response.statusCode).eq(200);
        })

        
})

})

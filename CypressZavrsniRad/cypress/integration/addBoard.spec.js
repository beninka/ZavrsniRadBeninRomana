/// <reference types="Cypress" />

import { addBoard }from "../page_objects/addBoard"


describe('Create Board', () => {

    beforeEach('Visit login page',() => {
    cy.loginViaBackend();
    cy.visit('/my-organizations');

    })

    it('01 - Create Board', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
        }).as('successfullCreate');

        addBoard.create();

        cy.wait('@successfullCreate').then(interception=> {
            console.log('RESPONSE', interception);
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.statusMessage).eq("Created")
        })

        addBoard.headerBoard
        .should('have.text', 'My board')

    })
})
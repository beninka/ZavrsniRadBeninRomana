class DeleteBoard {

    get btnEdit () {
        return cy.get('a[href="/boards/8013/settings"]')
    }

    get deleteBTn () {
        return cy.get('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]')
    }

    get confirmationBtn () {
        return cy.get('button[name="save-btn"]')
    }
    get deleteConfirmation () {
        return cy.get('h4').contains('Confirm Your Action');
    }

    delete() {

        this.btnEdit.click();
        this.deleteBTn.click();
        this.confirmationBtn.click();
    }

}

export const deleteBoard = new DeleteBoard ()





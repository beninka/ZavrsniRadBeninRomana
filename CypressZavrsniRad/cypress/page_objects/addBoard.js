class AddBoard {

    get btnAdd () {
        return cy.get('div[class="vs-c-list__btn vs-c-list-btn--add-new el-tooltip"]').eq(0);
    }

    get addBoard () {
        return cy.get('div[class="el-tooltip__popper is-light el-tooltip-sidebar"]');
    }

    get boardTitle () {
        return cy.get('input[name="name"]');
    }

    get nextBtn () {
       return cy.get('button[name="next_btn"]');
    }

    get boardType () {
       return cy.get('span[name="type_kanban"]');
    }

    get finishBtn () {
       return cy.get('button[name="next_btn"]');
    }

    get headerBoard () {
        return cy.get('span').contains('My board')
    }

    create(title){
        this.btnAdd.click();
        this.addBoard.click();
        this.boardTitle.type('My board');
        this.nextBtn.click();
        this.boardType.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.finishBtn.click();
    }
}

export const addBoard = new AddBoard();


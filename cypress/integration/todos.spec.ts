describe('Todos', () => {

    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3000/todos', { fixture: 'get-todos.json' });
        cy.intercept('POST', 'http://localhost:3000/todos', { id: 'XXX', description: 'But what about that beer?' })
        cy.visit('');
        cy.get('[data-t-routing-todos]').click();
    })

    it('should show the correct urls', () => {
        cy.url().should('include', '/todos');
    });

    it('should display the list', () => {
        cy.get('[data-t-todo-item="0"] > p').should('contain', 'First Item');
        cy.get('[data-t-todo-item="1"] > p').should('contain', 'Second Item');

    });
    it('adding an item', () => {
        cy.get('[data-t-todo-item-input]').type('But what about that beer?');
        cy.get('[data-t-todo-submit]').click();

        cy.get('[data-t-todo-item="0"] > p').should('contain', 'But what about that beer?');

        cy.get('[data-t-todo-list').children().first().should('contain', 'But what about that beer?');
    });
});
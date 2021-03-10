describe('The Counter', () => {
    beforeEach(() => {
        cy.visit('');
        cy.get('[data-t-routing-counter]').click();

    })
    it('should be on the right route', () => {
        cy.url().should('include', '/counter');
    });
    it('should start at zero', () => {
        cy.get('[data-t-counter-current]').should('contain', '0');
    });
    it('should increment', () => {

        cy.get('[data-t-counter-increment-button]').click();
        cy.get('[data-t-counter-current]').should('contain', '1');
        cy.get('[data-t-counter-increment-button]').click();
        cy.get('[data-t-counter-increment-button]').click();
        cy.get('[data-t-counter-increment-button]').click();
        cy.get('[data-t-counter-increment-button]').click();
        cy.get('[data-t-counter-current]').should('contain', '5');

    })
    it('should decrement', () => {
        cy.get('[data-t-counter-decrement-button]').click();
        cy.get('[data-t-counter-current]').should('contain', '1');
        cy.get('[data-t-counter-decrement-button]').click();
        cy.get('[data-t-counter-decrement-button]').click();
        cy.get('[data-t-counter-decrement-button]').click();
        cy.get('[data-t-counter-decrement-button]').click();
        cy.get('[data-t-counter-current]').should('contain', '5');
    });
})
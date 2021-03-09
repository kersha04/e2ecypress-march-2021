describe('The Banking Page', () => {
    beforeEach(() => {
        cy.visit(''); // todo - I don't like this.
        //cy.visitRoute('[data-t-routing-banking]');
        cy.get('[data-t-routing-banking').click();
    });
    it('has the correct url displayed in the route', () => {
        cy.url().should('include', 'banking');
    });
    it('can do a deposit', () => {
        // cy.pause();

        cy.get('app-banking input.input')
            .type('100');
        cy.get('[data-t-banking-deposit-button]').click();

        cy.get('[data-t-banking-balance]').should('contain', '$5,100.00');

        cy.get('[data-t-banking-amount-input]').should('be.empty');

        cy.focused().should('have.attr', 'data-t-banking-amount-input');
        // cy.screenshot();
    });
});
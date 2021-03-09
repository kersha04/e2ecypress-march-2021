describe('The Home Component', () => {
    beforeEach(() => {
        cy.visit('');
    })

    it('what? What should it do??', () => {
        cy.url().should('include', 'home');
    })
});
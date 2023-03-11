describe("Verify signed in user and product quantity", () => {
    beforeEach(() => {
        cy.visit('https://bstackdemo.com/');

    })

    it('Verify Signed In User', () => {
        cy.get('#signin').click()
        cy.get('#username>.css-yk16xz-control>.css-1hwfws3>.css-1wa3eu0-placeholder').click();
        cy.get('#react-select-2-option-0-0').click();
        cy.get('.css-1wa3eu0-placeholder').click();
        cy.get('#react-select-3-option-0-0').click();
        cy.get('#login-btn').click()
        cy.get('.username').should('be.text', 'demouser')

    });
    it('Add product to cart and verify the quantity', () => {
        cy.get('.shelf-item__buy-btn').first().click()
        cy.get('.bag__quantity').should('have.text', '1')

    });
});

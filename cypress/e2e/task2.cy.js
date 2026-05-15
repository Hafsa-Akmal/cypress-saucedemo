describe('Task 2 — Assertions, Aliases and Custom Commands', () => {

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
    })

    it('Assert that the Products heading is visible', () => {
        cy.get('.title').should('be.visible')
    })

    it('Assert that the Products heading has correct text', () => {
        cy.get('.title').should('have.text', 'Products')
    })
    it('Assert that the login button has a data-test attribute', () => {
        cy.visit('/')
        cy.get('[data-test="login-button"]').should('have.attr', 'data-test', 'login-button')
    })

    it('Assert that the inventory list is not visible on login page', () => {
        cy.visit('/')
        cy.get('.inventory_list').should('not.exist')
    })
    it('Save cart icon as alias and click it', () => {
        cy.get('.shopping_cart_link').as('cartIcon')
        cy.get('@cartIcon').should('be.visible')
        cy.get('@cartIcon').click()
        cy.url().should('include', '/cart')
    })

})
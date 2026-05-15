describe("Navigation Tests - saucedemo.com", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    });

    it("Test 1: Burger menu opens and About link is present", () => {
        cy.get("#react-burger-menu-btn").click();
        cy.get("#about_sidebar_link")
            .should("be.visible")
            .and("contain", "About");
    });

    it("Test 2: Navigate from Products to Cart page", () => {
        // First page — Products
        cy.url().should("include", "/inventory");
        cy.get(".title").should("have.text", "Products");

        // Go to Cart — second page
        cy.get(".shopping_cart_link").click();
        cy.url().should("include", "/cart");
        cy.get(".title").should("have.text", "Your Cart");
    });

});
describe("Login Tests - saucedemo.com", () => {

    beforeEach(() => {
        cy.visit("/"); // visits baseUrl = saucedemo.com
    });

    it("Test 1: Valid login redirects to inventory page", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        // Assert we are on the products/dashboard page
        cy.url().should("include", "/inventory");
        cy.get(".title").should("have.text", "Products");
    });

    it("Test 2: Invalid password shows error message", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("wrong_password");
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
            .should("be.visible")
            .and("contain", "Username and password do not match");
    });

    it("Test 3: Empty fields show validation error", () => {
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
            .should("be.visible")
            .and("contain", "Username is required");
    });

});
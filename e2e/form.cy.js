describe("Form / Checkout Test - saucedemo.com", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    });

    it("Test 1: Complete checkout form and see confirmation", () => {
        // Add first item to cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.get(".shopping_cart_link").click();

        cy.get('[data-test="checkout"]').click();
        cy.url().should("include", "/checkout-step-one");

        cy.get('[data-test="firstName"]').type("Ali");
        cy.get('[data-test="lastName"]').type("Hassan");
        cy.get('[data-test="postalCode"]').type("54000");
        cy.get('[data-test="continue"]').click();

        cy.url().should("include", "/checkout-step-two");
        cy.get(".title").should("have.text", "Checkout: Overview");

        cy.get('[data-test="finish"]').click();

        cy.get(".complete-header")
            .should("be.visible")
            .and("contain", "Thank you for your order");
    });

});
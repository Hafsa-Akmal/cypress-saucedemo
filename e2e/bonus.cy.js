describe("Bonus Tests - saucedemo.com", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    });

    // Bonus 1: Check a specific image is visible
    it("Bonus 1: Product image is visible on page", () => {
        cy.get(".inventory_item img").first().should("be.visible");
    });

    // Bonus 2: Sort dropdown updates the product list
    it("Bonus 2: Sort dropdown by Price (low to high) updates list", () => {
        cy.get('[data-test="product_sort_container"]').select("lohi");

        cy.get(".inventory_item_price").first().then(($price) => {
            const price = parseFloat($price.text().replace("$", ""));
            expect(price).to.equal(7.99); // cheapest item on saucedemo
        });
    });

});
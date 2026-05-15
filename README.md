Cypress E2E Testing — saucedemo.com

This project contains end-to-end tests written in Cypress for the saucedemo.com web application, covering login behaviour, page navigation, and the checkout form.

How to Run

Start by installing the project dependencies by running `npm install` in the project root. Once that completes, you have two options:

- Run all tests in headless mode using `npx cypress run`. This gives terminal output only and is the quickest way to see results and take a screenshot of passing tests.
- Run tests interactively using `npx cypress open`, then select E2E Testing and pick any spec file to watch each step execute live in the browser.

Test Files

All test files are inside the `cypress/e2e/` folder:

- `login.cy.js` covers the three login scenarios: valid credentials, wrong password, and empty fields.
- `navigation.cy.js` handles the two navigation tests, checking the burger menu and moving between the Products and Cart pages.
- `form.cy.js` runs the full checkout flow, filling in the shipping form and asserting the order confirmation message appears.
- `bonus.cy.js` contains the two optional tasks: verifying a product image is visible, and confirming the sort dropdown correctly reorders the product list.

Credentials Used

All tests log in with the username `standard_user` and the password `secret_sauce`, which are the publicly provided demo credentials for saucedemo.com.
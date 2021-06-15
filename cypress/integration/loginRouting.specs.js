/// <reference types="Cypress" />

describe("Login routing should be correctly, Happy Path!", () => {
  before(() => {
    cy.visit("/inloggen");
    cy.login();
  });
  it("Should redirect to profilepage after login", () => {
    cy.url().should("contain", "/profiel");
  });
  after(() => {
    cy.get("body").then((user) => {
      if (user) {
        cy.logout();
      }
    });
  });
});

describe("login routing, Unhappy Path!", () => {
  before(() => {
    cy.visit("/inloggen");
  });
  it("Should display error message when no input is entered", () => {
    cy.get(".Login_form-login__DdWK5").should("contain.text", "Inloggen");
    cy.get(".BtnLogin_login-cta__3QFrg").click();
    cy.get("#email-error")
      .should("be.visible")
      .each((element) => {
        expect(element.text()).to.contains("Verplicht veld");
      });
  });
});

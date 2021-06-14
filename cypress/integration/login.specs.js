/// <reference types="Cypress" />

describe.only("Testing login functionality. Happy Path!", () => {
  before(() => {
    cy.visit("/inloggen");
  });
  it("should display loginpage and form", () => {
    cy.get(".Login_form-login__DdWK5");
  });
  it("Should fill in inputfield email", () => {
    cy.get("#email-input").type("mail@mail.com");
  });
  it("Should fill in inputfield password correctly", () => {
    cy.get("#passWordInput").type("Ab123456");
  });
  it("Should click on button to login", () => {
    cy.get(".BtnLogin_login-cta__3QFrg").click();
  });
  it("Should redirect to profile page", () => {
    cy.url().should("contain", "/profiel");
  });
  it("Should logout as a user", () => {
    cy.get(".NavBar_btn-out__X8ba-").click();
  });
  it("Should redirect to Homepage", () => {
    cy.url().should("not.contain", "/inloggen");
  });
});

describe("Testing login functionality. Unhappy, Path!", () => {
  before(() => {
    cy.visit("/inloggen");
  });
  it("Should ");
});

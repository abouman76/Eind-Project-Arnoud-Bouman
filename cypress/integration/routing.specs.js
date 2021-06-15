/// <reference types="Cypress" />

describe("routing", () => {
  it("should display homepage", () => {
    cy.visit("/");
    cy.get("h2").should("contain", "Welkom");
  });
  it("should display loginpage", () => {
    cy.visit("/inloggen");
    cy.get("form");
  });
  it("should redirect when accessing profile page without being logged in.", () => {
    cy.visit("/profiel");
    cy.url().should("not.contain", "profiel");
  });
});

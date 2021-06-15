describe("Some Test", () => {
  before(() => {
    cy.login();
  });
  it("Adds document to test_hello_world collection of Firestore", () => {
    cy.visit("/");
    //cy.callFirestore("add", "test_hello_world", { some: "value" });
  });
});

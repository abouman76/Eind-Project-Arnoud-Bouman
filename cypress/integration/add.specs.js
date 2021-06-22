/// <reference types="Cypress" />

describe("Should add an request", () => {
  before(() => {
    cy.login();
  });
  it('Should visit the "Plaats advertentie" page', () => {
    cy.visit("/plaats");
  });
  it("Should post a request add correctly", () => {
    cy.get(".MyAdComponent_ad-component__iORE6").should(
      "contain.text",
      "Uw advertentie"
    );
    cy.get('[type="radio"]').check();
    cy.get("#title-details").type("Cypress");
    cy.get("#description-details").type("Testen met Cypress");
    cy.get(".MyAdComponent_ad-comp-btn__1lG2w").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Advertentie wordt geplaatst. Klik op OK");
    });
    // @Todo: how to run code without waiting???
    cy.wait(1000);
  });
});

describe("Should display ad with functionalities at request page", () => {
  it("Should display add on request page", () => {
    cy.visit("/vraag");
  });
  it("Should have correct working functionalities", () => {
    cy.get(".RequestComp_request-form__1i4i7")
      .contains("Cypress")
      .parent()
      .as("ad");
    cy.get("@ad").contains("toon nummer").click().should("contain.text", "06");

    cy.get("@ad")
      .contains("stuur email")
      .should("have.attr", "href", `mailto:tester@test.com?subject=Cypress`);
  });

  after(() => {
    // @todo: Query from Firebase or don't hardcode the UID, get it from env instead
    cy.callFirestore("get", "userAdvertisement", {}).then((response) => {
      response.forEach((ad) => {
        if (ad.uid === "L6l35k13fpYIYVW6DeouSqxhu4h2") {
          // cy.callFirestore("get", `userAdvertisement/${ad.id}`);
          cy.callFirestore("delete", `userAdvertisement/${ad.id}`);
          // cy.log("Ad", ad);
        }
      });
      // cy.log("get add", response);
    });
    cy.logout();
  });
});

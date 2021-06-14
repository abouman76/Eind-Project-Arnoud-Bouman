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
    // cy.wait(5000);
  });
});

describe("Should display add with functionalities at request page", () => {
  it("Should display add on request page", () => {
    cy.visit("/vraag");
  });
  it("Should have correct working functionalities", () => {
    cy.get(".ShowPhone_btn-phone__3LRFD")
      .eq("2")
      .then((element) => {
        cy.get(element)
          .should("contain.text", "toon nummer")
          .click()
          .should("contain.text", "06")
          .click();
      });

    cy.get(".RequestComp_header-request__3eJtR")
      .eq("2")
      .then(function (title) {
        cy.get(title).invoke("text").as("title");
        cy.get("@title");
      });

    cy.get(".MailTo_btn-mail__Nl-dk")
      .eq("2")
      .then((element) => {
        cy.get("@title").then((titleAdd) => {
          cy.get(element).should(
            "have.attr",
            "href",
            `mailto:mail@mail.com?subject=${titleAdd}`
          );
        });
      });
  });
  after(() => {
    cy.callFirestore("get", "userAdvertisement", {
      where: ["uid", "==", "L6l35k13fpYIYVW6DeouSqxhu4h2"],
    }).then((response) => {
      response.map((wat) => {
        cy.log("wat", wat);
      });
      cy.log("get add", response);
    });
  });
});

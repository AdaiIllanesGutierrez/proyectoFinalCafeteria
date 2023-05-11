describe("Mostrar Menu", () => {
    it("Shows the menu", () => {
      cy.visit("/");
    //   cy.get("#primer-numero").type(4);
    //   cy.get("#segundo-numero").type(5);
    //   cy.get("#sumar-button").click();
      cy.get("#menu-div").should("contain", "cafe","mocca","te");
    });
  });
  
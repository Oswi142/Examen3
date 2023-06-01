describe("Calculador", () => {
    it("Debería mostrar la cantidad de cambio que se debe retornar", () => {
      cy.visit("index.html");
      cy.get("#monto-venta").type(4);
      cy.get("#monto-efectivo").type(5);
      cy.get("#calcular-button").click();
      cy.get("#resultado-div").should("contain", "1");
    });
  });
  
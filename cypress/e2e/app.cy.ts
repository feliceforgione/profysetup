describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Get startedZZZ by editing");
  });
});

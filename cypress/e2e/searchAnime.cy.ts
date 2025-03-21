describe("Anime search", () => {
  it("passes", () => {
    cy.viewport(1230, 660);
    cy.visit("http://localhost:3000/search/anime");
    cy.get('[data-id="search-input"]').type("naruto");
    cy.contains(/naruto/i);
    cy.get('[data-id="search-input"]').clear();
    cy.contains(/trending now/i);
    cy.get('[data-id="genres-input"]').select("Action");
    cy.contains(/attack on titan/i);
    cy.get('[data-id="year-input"]').select("2017");
    cy.contains(/black clover/i);
    cy.get('[data-id="season-input"]').select("Winter");
    cy.contains(/blue exorcist/i);
    cy.get('[data-id="format-input"]').select("OVA");
    cy.contains(/Super Danganronpa 2.5/i);
  });
});

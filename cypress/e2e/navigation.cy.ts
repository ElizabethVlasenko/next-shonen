describe("Navigation tests", () => {
  it("tests navigation", () => {
    cy.viewport(1230, 660);
    cy.visit("/");
    cy.get('[data-id="logo-link"]').click();
    cy.get("section h1").should("have.text", "Dive Into the World of Anime");
    cy.get('[data-id="browse-link"]').click();
    cy.get("[data-id=search-category-trending-now] h2").should(
      "have.text",
      "Trending now",
    );
    cy.get("[data-id=search-category-popular-this-season] h2").should(
      "have.text",
      "Popular this season",
    );
    cy.get("[data-id=search-category-upcoming-next-season] h2").should(
      "have.text",
      "Upcoming next season",
    );
    cy.get("[data-id=search-category-all-time-popular] h2").should(
      "have.text",
      "All time popular",
    );
  });
});

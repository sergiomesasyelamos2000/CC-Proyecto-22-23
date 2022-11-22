describe("Book Module", () => {
  beforeEach(() =>
    cy.visit("http://localhost:4200/login", {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear();
        win.localStorage.clear();
      },
    })
  );

  it("should update a book successfully", () => {
    cy.get("mat-form-field")
      .get("app-input:nth-child(1)")
      .type("root@root.com");
    cy.get("mat-form-field").get("app-input:nth-child(2)").type("root");
    cy.get("app-button")
      .get("button")
      .click()
      .url()
      .should("include", "/users");
    cy.get("#navbarTogglerDemo02")
      .get("li:nth-child(2)")
      .click()
      .url()
      .should("include", "/books");
    cy.get("app-book-list")
      .get("div")
      .get("div")
      .get("div")
      .get("div")
      .first()
      .get("div")
      .get("app-book-row")
      .get("button.btn.btn-outline-primary.block")
      .contains("Ver más")
      .click();
    cy.get('app-input:nth-child(2)').type('Test Cypress')
      .get('button').contains('Actualizar libro');
    cy.get('button').contains('Regresar').click();
      cy.url().should('include', '/books');
  });

  /*   describe("Pelicula existe", () => {
    it("Deberia existir", () => {
      assert.exists(book);
    });
    it("Deberia tener propiedad id", () => {
      assert.property(movie, "id");
    });
    it("Deberia poder ver la overview", () => {
      assert.property(movie, "overview");
      assert.isNotEmpty(movie.overview);
    });
    it("Reviews deberia ser un array y no estar vacio", () => {
      assert.isArray(movie.reviews);
      assert.isNotEmpty(movie.reviews);
    });
    it("Vote average deberia ser un nº entre 0 y 10", () => {
      assert.isNumber(movie.voteAverage);
      assert.isAtLeast(movie.voteAverage, 0);
      assert.isAtMost(movie.voteAverage, 10);
    });
  }); */
});

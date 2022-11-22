describe("Auth Module", () => {
  beforeEach(() =>
    cy.visit("http://localhost:4200/login", {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear();
        win.localStorage.clear();
      },
    })
  );

  it("should login successfully", () => {
    cy.get("mat-form-field")
      .get("app-input:nth-child(1)")
      .type("root@root.com");
    cy.get("mat-form-field").get("app-input:nth-child(2)").type("root");
    cy.get("app-button")
      .get("button")
      .click()
      .url()
      .should("include", "/users");
  });

  it("should login wrong", () => {
    cy.get("mat-form-field")
      .get("app-input:nth-child(1)")
      .type("badlogin@badlogin.com");
    cy.get("mat-form-field").get("app-input:nth-child(2)").type("badlogin");
    cy.get("app-button")
      .get("button")
      .click()
      .url()
      .should("include", "/login");
  });

  it("should signup successfully", () => {
    cy.get("div")
      .get("a")
      .contains("¿No tienes cuenta?")
      .click()
      .url()
      .should("include", "/sign-up");
    cy.get("mat-form-field").get("app-input:nth-child(1)").type("Test");
    cy.get("mat-form-field")
      .get("app-input:nth-child(2)")
      .type("Apellidos_Test");
    cy.get("mat-form-field")
      .get("app-input:nth-child(3)")
      .type("test@test.com");
    cy.get("mat-form-field").get("app-input:nth-child(4)").type("test");
    cy.get("app-button")
      .get("button")
      .click()
      .url()
      .should("include", "/login");
  });

  it("should signup wrong", () => {
    cy.get("div")
      .get("a")
      .contains("¿No tienes cuenta?")
      .click()
      .url()
      .should("include", "/sign-up");
    cy.get("mat-form-field").get("app-input:nth-child(1)").type("Test");
    cy.get("mat-form-field")
      .get("app-input:nth-child(2)")
      .type("Apellidos_Test");
    cy.get("mat-form-field")
      .get("app-input:nth-child(3)")
      .type("testtest.com");
    cy.get("mat-form-field").get("app-input:nth-child(4)").type("test");
    cy.get("app-button")
      .get("button")
      .url()
      .should("include", "/sign-up");
  });
});

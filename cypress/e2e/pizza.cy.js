/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe("Home Page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("displays the right text in the home page", () => {
    cy.get("h1").should("have.text", `KOD ACIKTIRIR PİZZA, DOYURUR`);
  });

  it("has a button to go into order page", () => {
    cy.contains(`ACIKTIM`).click();
    cy.url().should("include", "/order");
  });
});

describe("Test Radio button groupings", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });
  it("can check only one of the options for size", () => {
    cy.get("#size-kucuk").check().should(`be.checked`);
    cy.get("#size-orta").should(`not.be.checked`);
    cy.get("#size-buyuk").should(`not.be.checked`);

    cy.get("#size-kucuk").check().should(`be.checked`);
    cy.get("#size-orta").should(`not.be.checked`);
    cy.get("#size-buyuk").should(`not.be.checked`);
  });
});

describe("Test Additional Ingredient checkboxes", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("shows an error when fewer than 4 ingredients are selected", () => {
    const fewerIngredients = ["tavuk-ızgara", "mısır", "sarımsak"];
    fewerIngredients.forEach((i) => {
      cy.get('input[name="additionalIngredients"]').check(i);
    });
    cy.get("[data-cy=requiredIgredients]").should("be.visible");
    cy.get("#order-button").should("be.disabled");
  });

  it("shows an error when more than 10 ingredients are selected", () => {
    const moreIngredients = [
      "tavuk-ızgara",
      "mısır",
      "sarımsak",
      "pepperoni",
      "ananas",
      "sosis",
      "soğan",
      "sucuk",
      "biber",
      "kabak",
      "kanada-jambonu",
      "domates",
      "jalepeno",
    ];
    moreIngredients.forEach((i) => {
      cy.get('input[name="additionalIngredients"]').check(i);
    });
    cy.get("[data-cy=requiredIgredients]").should("be.visible");
    cy.get("#order-button").should("be.disabled");
  });
});

describe("Test Customer Name Input", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("shows an error when fewer than 3 characters are written in name input", () => {
    cy.get("#customerName").type("xd");
    cy.get("[data-cy=requiredName").should("be.visible");
    cy.get("#order-button").should("be.disabled");
  });
});

Cypress.Commands.add("fillOrder", () => {
  cy.visit("http://localhost:5173/");
  cy.contains(`ACIKTIM`).click();
  cy.get("#size-orta").check();
  cy.get("#hamur").select("orta");
  cy.get('input[name="additionalIngredients"]').check("sucuk");
  cy.get('input[name="additionalIngredients"]').check("soğan");
  cy.get('input[name="additionalIngredients"]').check("sosis");
  cy.get('input[name="additionalIngredients"]').check("ananas");
  cy.get("#customerName").type("kerem");
  cy.get("#orderNote").type("hızlı gelsin çok acıktım");
  cy.get("#add-qty").click();
});

describe("Test ordering", () => {
  it("fills out the form and orders", () => {
    cy.fillOrder();
    cy.get("#order-button").click();
    cy.url().should("include", "/success");
    cy.get("h1").should("have.text", `TEBRİKLER! SİPARİŞİNİZ ALINDI!`);
  });
});

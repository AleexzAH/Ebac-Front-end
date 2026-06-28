/// <reference types="cypress" />

describe("Inclusão de Contatos", () => {
  const nome = `John Doe ${Date.now()}`;

  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Deve incluir um novo contato", () => {
    cy.get('[type="text"]').type(nome);
    cy.get('[type="email"]').type("john.doe@example.com");
    cy.get('[type="tel"]').type("1234567890");
    cy.get('[type="submit"]').click();

    cy.contains(nome).should("be.visible");
  });
});

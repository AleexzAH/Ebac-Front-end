/// <reference types="cypress" />

describe("Edição de Contatos", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Deve editar um contato", () => {
    const nomeOriginal = `John Doe ${Date.now()}`;
    const nomeEditado = `Jane Doe ${Date.now()}`;

    // Cria o contato
    cy.get('[type="text"]').type(nomeOriginal);
    cy.get('[type="email"]').type("john.doe@example.com");
    cy.get('[type="tel"]').type("1234567890");
    cy.get('[type="submit"]').click();

    // Verifica que foi criado
    cy.contains(nomeOriginal).should("be.visible");

    // Edita o último contato criado
    cy.get(".edit").last().click();
    cy.get("input[type='text']").last().clear().type(nomeEditado);
    cy.get("input[type='email']").last().clear().type("jane.doe@example.com");
    cy.get("input[type='tel']").last().clear().type("9876543210");

    // Clica para salvar a edição
    cy.get(".alterar").click();

    // Verifica a alteração
    cy.contains(nomeEditado).should("be.visible");
    cy.contains(nomeOriginal).should("not.exist");
  });
});

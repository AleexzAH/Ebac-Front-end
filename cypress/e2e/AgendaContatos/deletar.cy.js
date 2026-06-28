/// <reference types="cypress" />

describe("Exclusão de Contatos", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Deve excluir um contato", () => {
    const nome = `John Doe ${Date.now()}`;

    // Cria o contato
    cy.get('[type="text"]').type(nome);
    cy.get('[type="email"]').type("john.doe@example.com");
    cy.get('[type="tel"]').type("1234567890");
    cy.get('[type="submit"]').click();

    // Confirma que foi criado
    cy.contains(nome).should("be.visible");

    // Exclui o último contato da lista
    cy.get(".delete").last().click();

    // Verifica que o contato não existe mais
    cy.contains(nome).should("not.exist");
  });
});

// / <reference types="Cypress" />

describe('Login', () => {
  it('should be publicly accessible', () => {
    cy.visit('/animation-glossary');

    // snapshot name will be the name passed in
    cy.matchImageSnapshot('test-screenshot');

    // match element snapshot
    cy.get('#test-screenshot').matchImageSnapshot();
  });
});

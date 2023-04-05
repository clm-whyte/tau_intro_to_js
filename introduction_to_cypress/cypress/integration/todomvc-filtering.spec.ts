/// <reference types="cypress" />

describe('todo filtering', () => {
  beforeEach(() => {
    cy.visit('https://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo').type('Clean room{enter}'); 
    cy.get('.new-todo').type('Learn Javascript{enter}'); 
    cy.get('.new-todo').type('Learn Cypress{enter}');

    cy.get('.todo-list li:nth-child(2) .toggle').click();
  });

  it('should filter "Active" todo', () => {
    cy.contains('Active').click();
    cy.get('.todo-list li').should('have.length', 2);
  });

  it('should filter "Completed" todo', () => {
    cy.contains('Completed').click();
    cy.get('.todo-list li').should('have.length', 1);
  });

  it('should filter "All" todo', () => {
    cy.contains('All').click();
    cy.get('.todo-list li').should('have.length', 3);
  });
});
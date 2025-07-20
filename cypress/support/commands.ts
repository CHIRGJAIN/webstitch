/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      dataCy(selector: string): Chainable<JQuery<HTMLElement>>
    }
  }
}

Cypress.Commands.add('login', (email, password) => {
  cy.session(
    [email, password],
    () => {
      cy.visit('/login')
      cy.get('[data-cy="email"]').type(email)
      cy.get('[data-cy="password"]').type(password)
      cy.get('[data-cy="submit"]').click()
      cy.url().should('not.include', '/login')
    },
    {
      validate: () => {
        cy.getCookie('auth-token').should('exist')
      },
    }
  )
})

Cypress.Commands.add('dataCy', (selector) => {
  return cy.get(`[data-cy=${selector}]`)
})
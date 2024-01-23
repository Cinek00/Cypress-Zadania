// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//////////////////////////////////////////////////////////////
    // komenda pod zadanie moduł 2 [Login i password LMS GoIT]
    //Test1
Cypress.Commands.add("login1", (login, password) => {
    cy.get("#user_email").type(login);
    cy.get("#user_password").type(password);
  });
//Test 2
Cypress.Commands.add("login2", (login, password) => {
  cy.get("#user_email").type(login);
  cy.get("#user_password").type(password);
});


//////////////////////////////////////////////////////////////
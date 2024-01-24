//////////////////////////////////////////////////////////////

    // komenda pod zadanie moduł 2 [Login i password LMS GoIT]
    //Test1
Cypress.Commands.add("login", (login, password) => {
    cy.get("#user_email").type(login);
    cy.get("#user_password").type(password);
  });
//////////////////////////////////////////////////////////////
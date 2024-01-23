/// <reference types= "cypress" />

describe("login test", () => {
    it("admin login", () => {
      cy.visit("https://www.edu.goit.global/account/login");
       cy.login("user888@gmail.com", "1234567890");
       cy.get('.eckniwg2').click();
       cy.get('#open-navigation-menu-mobile').click();
       cy.get(':nth-child(11) > .next-bve2vl').click();
    });
  });

  
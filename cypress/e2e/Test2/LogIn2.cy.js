/// <reference types= "cypress" />

describe("login test", () => {
    it("admin login", () => {
      cy.visit("https://www.edu.goit.global/account/login");
       cy.login2("testowyqa@qa.team", "QA!automation-1");
       cy.get('.eckniwg2').click();
       cy.get('#open-navigation-menu-mobile').click();
       cy.get(':nth-child(9) > .next-bve2vl').click();
    });
  });

  
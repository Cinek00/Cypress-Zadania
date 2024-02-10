/// <reference types= "cypress" />

describe("login test do LMS goIT", () => {
  // Test 1
    it("Test1 login", () => {
      cy.visit("https://www.edu.goit.global/account/login");
       cy.login("user888@gmail.com", "1234567890");
       cy.get('.eckniwg2').click();
       cy.get('#open-navigation-menu-mobile').click();
       cy.get(':nth-child(11) > .next-bve2vl').click();
    });
  // Test 2
    it("Test2 login", () => {
      cy.visit("https://www.edu.goit.global/account/login");
       cy.login("testowyqa@qa.team", "QA!automation-1");
       cy.get('.eckniwg2').click();
       cy.get('#open-navigation-menu-mobile').click();
       cy.get(':nth-child(9) > .next-bve2vl').click();
    });
  });

  // test7
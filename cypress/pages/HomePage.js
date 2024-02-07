export class HomePage {
    clickMenuButton() {
        cy.get('#open-navigation-menu-mobile').click();
      }

    clickLogoutInMenu() {
        cy.get(':nth-child(11) > .next-bve2vl').click();
      }


}

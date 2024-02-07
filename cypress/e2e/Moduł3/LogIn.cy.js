/// <reference types= "cypress" />

import { LoginPage } from "../../pages/LoginPage"; 
import { HomePage } from "../../pages/HomePage"; 

const LoginPages = new LoginPage();
const HomePages = new HomePage();

describe("kopia metodą Pages - login test do LMS goIT", () => {
  // Test 1
    it("Test1 login", () => {
      LoginPages.navigate();
      // LoginPages.fillEmailPassword();
      LoginPages.fillEmail('user888@gmail.com');
      LoginPages.fillPassword('1234567890');
      LoginPages.clickLoginButton();

      HomePages.clickMenuButton();
      HomePages.clickLogoutInMenu();
      LoginPages.navigate();
    });
  // Test 2
  it("Test2 login", () => {
    LoginPages.navigate();
    LoginPages.fillEmail('testowyqa@qa.team');
    LoginPages.fillPassword('QA!automation-1');
    LoginPages.clickLoginButton();

    HomePages.clickMenuButton();
    HomePages.clickLogoutInMenu();
    LoginPages.navigate();
  });

});

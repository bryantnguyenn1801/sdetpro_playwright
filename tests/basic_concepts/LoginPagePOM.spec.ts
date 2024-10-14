import test from "@playwright/test";
import LoginPage01 from "../../models/pages/Login/LoginPageMethod01";
import LoginPage02 from "../../models/pages/Login/LoginPageMethod02";

test('Test POM method 01', async ({ page }) => {

    // Go to the login page
    await page.goto('/login');

    // init DOM
    const loginPage = new LoginPage01(page);

    // Interact with elements

    await loginPage.inputUsername('tomsmith');
    await loginPage.inputPassword('SuperSecretPassword!');
    await loginPage.clickOnLoginBtn();

    // debug 
    await page.waitForTimeout(3000);

}) 
test('Test POM method 02', async ({ page }) => {

    // Go to the login page
    await page.goto('/login');

    // init DOM
    const loginPage = new LoginPage02(page);

    // Interact with elements

    await loginPage.Username().fill('tomsmith');
    await loginPage.Password().fill('SuperSecretPassword!');
    await loginPage.LoginBtn().click();

    // debug 
    await page.waitForTimeout(3000);

}) 
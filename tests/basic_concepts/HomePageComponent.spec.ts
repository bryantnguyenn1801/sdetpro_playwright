import test from "@playwright/test";
import HomePage from "../../models/pages/HomePage";


test('Test Header Component', async ({ page }) => {

    // Go to the login page
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const headerComp = homePage.headerComponent();
    await headerComp.headerLogo().click();

    await page.waitForTimeout(3000);
}) 

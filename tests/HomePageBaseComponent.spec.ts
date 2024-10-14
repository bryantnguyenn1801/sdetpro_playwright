import test from "@playwright/test";
import HomePage from "../models/pages/HomePage";


test('Test BaseComponent approach', async ({ page }) => {
    // Go to the login page
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const footerComp = homePage.footerComponent();
    const customerServiceColumnComp = footerComp.customerServiceColumnComp();
    const columnTitle = await customerServiceColumnComp.title().textContent();
    console.log(columnTitle);
    const columnLinks = await customerServiceColumnComp.links();
    for(let link of columnLinks){
        const linkText = await link.textContent();
        console.log(linkText);
    }
    
}) 

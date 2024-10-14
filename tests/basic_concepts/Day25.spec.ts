import test from "@playwright/test";
import { log } from "console";

test('Handle Dropdown', async ({ page }) => {
    await page.goto('/dropdown');

    // Target the dropdown element

    const dropdownLoctator = await page.locator('#dropdown');


    // Select option 01 - Index
    await dropdownLoctator.selectOption({ index: 1 });
    // Debug purpose only
    await page.waitForTimeout(1000);


    // Select option 02 - Value
    await dropdownLoctator.selectOption({ value: '2' });
    await page.waitForTimeout(1000);

    // Select Option 01- Label/ visible text
    await dropdownLoctator.selectOption({ label: 'Option 1' });
    await page.waitForTimeout(1000);

})
test('Handle IFrame', async ({ page }) => {
    await page.goto('/iframe');

    // Target iframe
    const iFrameLocator = await page.locator('iframe[id^="mce"]');

    // Find element locator in IFrame
    const editTextArea = iFrameLocator.locator('body p')
    await editTextArea.click();
    await editTextArea.clear();
    await editTextArea.fill('New content');

    // Interacting with the main frame element   
})
test('Handle Mouse hover and narrow down', async ({ page }) => {
    await page.goto('/hovers');

    // Find all the figures

    const allFigureLocators = await page.locator('.figure').all();

    // Loop over allFigureLocators
    for (const figureLocator of allFigureLocators){
        // Narow down searching scope
        const imgLocator = figureLocator.locator('img');
        const usernameLocator = figureLocator.locator('h5');
        const profileHyperlinkLocator = figureLocator.locator('a');

        let usernameText = await usernameLocator.textContent();
        console.log(usernameText);
        let isUserNameVisible = await usernameLocator.isVisible();
        let isProfileHyperlink = await profileHyperlinkLocator.isVisible();
        console.log(` isUserNameVisible:`,{isUserNameVisible});
        console.log(` isProfileHyperlink:`,{isProfileHyperlink});
        

        // Mouse hover
        await imgLocator.hover();
        await page.waitForTimeout(1000);
        isUserNameVisible = await usernameLocator.isVisible();
        isProfileHyperlink = await profileHyperlinkLocator.isVisible();
        console.log(` isUserNameVisible:`,{isUserNameVisible});
        console.log(` isProfileHyperlink:`,{isProfileHyperlink});
        
    }
   
})

test.only('Checking element state and handle dynamic states', async ({ page }) => {
    await page.goto('/dynamic_controls');

    // Locate 2 parent componets 

    const checkboxComponent = await page.locator('#checkbox-example'); 
    const inputComponent = await page.locator('#input-example'); 

    // Interact checkbox element
    const checkboxLocator = checkboxComponent.locator('#checkbox input');
    let isCheckboxEnabled = await checkboxLocator.isEnabled();
    let isCheckboxChecked = await checkboxLocator.isChecked();

    if(!isCheckboxChecked){
        await checkboxLocator.click();
    }

    // Interact with input example 

    await page.waitForTimeout(1000);

    const removeButtonLocator = await checkboxComponent.locator('button');
    await removeButtonLocator.click(); 

    await page.waitForSelector('#checkbox-example #checkbox input',{state: 'hidden'});
})


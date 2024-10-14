import test from "@playwright/test";

test('Link Text -XPATH', async({page})=>{
    await page.goto('/');

    // Find the locator
    const footerLinkLocator = 
    await page.waitForSelector("//a[contains(text(),'Elemental Selenium')]",{timeout: 15 * 1000});

   // Click on the link
   await footerLinkLocator.click({});

   // Debug purpose only

   await page.waitForTimeout(3*1000);
})

test('Link Text -CSS', async({page})=>{
    await page.goto('/');

    // Find the locator
    const footerLinkLocator = 
    await page.locator("a:has-text('Elemental Selenium')");

   // Click on the link
   await footerLinkLocator.click({});
})

test('Link Text - Filtering', async({page})=>{
    await page.goto('/');
    // find the form authentication Hyperlink -> clink
    const formAuthenLocator =  await page.locator('a').filter({hasText: 'Form Authentication'});
    await formAuthenLocator.click();

    // debug purpose only
    await page.waitForTimeout(3000);
})

test.only('Form Authentication', async({page})=>{
    await page.goto('/login');
    
    // Form interaction
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecretPassword!");
    await page.locator('button[type="submit"]').click();

    let dashboardHeaderText = await page.locator('h2').textContent();
    console.log(dashboardHeaderText);

    dashboardHeaderText = await page.locator('h2').innerText();
    console.log(dashboardHeaderText);


    // Debug purpose only

    await page.waitForTimeout(3000);
})
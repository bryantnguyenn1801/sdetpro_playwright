import test from "@playwright/test";
import { log } from "console";
import { getAdParams, scrollToBottom } from "../utils/PageHelper";

test('Handle JS Dropdown', async ({ page }) => {
    await page.goto('/javascript_alerts');
    const jsAlertLoc = await page.locator("//button[text()='Click for JS Alert']");

    // Must define event handler first

    page.on("dialog", async dialog => {
        await dialog.accept();
    });

    //Triger  event || click button

    await jsAlertLoc.click();
    await page.waitForTimeout(1000);

})
test('Handle JS confirm', async ({ page }) => {
    await page.goto('/javascript_alerts');
    const jsAlertJsConfirm = await page.locator("//button[text()='Click for JS Confirm']");

    // Must define event handler first

    page.on("dialog", async dialog => {
        console.log(`Alert's content is : ${dialog.message()}`);

        await dialog.dismiss();
    });

    //Triger  event || click button

    await jsAlertJsConfirm.click();
    await page.waitForTimeout(1000);

})
test('Handle JS Promp', async ({ page }) => {
    await page.goto('/javascript_alerts');
    const jsAlertJsPrompt = await page.locator("//button[text()='Click for JS Prompt']");

    // Must define event handler first

    page.on("dialog", async dialog => {
        console.log(`Alert's content is : ${dialog.message()}`);

        await dialog.accept("I'm accepting the JS prompt !")
    });

    //Triger  event || click button

    await jsAlertJsPrompt.click();
    await page.waitForTimeout(1000);
})
test('Execute JS snippet without params', async ({ page }) => {
    await page.goto('/floating_menu');

    // Explore hightlight method
    await page.locator('h3').highlight();
    
    // scroll to bottom
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    })

    await page.waitForTimeout(3000);

    // scroll to TOP
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    })

    await page.waitForTimeout(3000);
})
test('Execute JS snippet With params', async ({ page }) => {
    await page.goto('/floating_menu');
    // scroll to bottom
    await scrollToBottom(page, 0.5);
    await page.waitForTimeout(3000);
})
test('Execute JS snippet With params and return value', async ({ page }) => {
    await page.goto('https://www.foodandwine.com/');

    await page.waitForSelector('#leaderboard-flex-1',{timeout: 10000});
    const scrollPercentage = 1;
    // scroll to bottom
    await scrollToBottom(page,scrollPercentage);
    await page.waitForTimeout(3000);


    const adParams = await getAdParams(page, 'leaderboard-flex-1');
    console.log(`adParams: ${JSON.stringify(adParams)}`);
    
    await page.waitForTimeout(3000);
})


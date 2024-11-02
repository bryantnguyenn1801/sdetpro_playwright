import test, { Page } from "@playwright/test";
import { OrderComputerFlow } from "../../test_flows/computer/OrderComputerFlow";
import { cheapComputerData } from '../../test-data/computer/CheapComputerData';
import { PageNavigator } from "../../test_flows/PageNavigator";


cheapComputerData.forEach(computerData => {
    test(`Test cheap computer component | RAM: ${computerData.ram}`, async ({ page }) => {        
        await page.goto('/build-your-cheap-own-computer');

        const orderComputerFlow: OrderComputerFlow = new OrderComputerFlow(page, computerData);
        await orderComputerFlow.login();
        await orderComputerFlow.buildComputerSpecAndAddToCart();
        await orderComputerFlow.verifyShoppingCart();
        await orderComputerFlow.agreeTOSAndCheckout();

        // DEBUG PURPOSE ONLY
        await page.waitForTimeout(3 * 1000);
    })
})
import test, { Page } from "@playwright/test";
import { OrderComputerFlow } from "../../test_flows/computer/OrderComputerFlow";
import { standardComputerData } from '../../test-data/computer/StandardComputerData';

standardComputerData.forEach(computerData => {
    test(`Test standar computer component | RAM: ${computerData.ram}`, async ({ page }) => {
        await page.goto('/build-your-own-computer');

        const orderComputerFlow: OrderComputerFlow = new OrderComputerFlow(page, computerData);
        await orderComputerFlow.login();
        await orderComputerFlow.buildComputerSpecAndAddToCart();

        // DEBUG PURPOSE ONLY
        await page.waitForTimeout(3 * 1000);
    })
})
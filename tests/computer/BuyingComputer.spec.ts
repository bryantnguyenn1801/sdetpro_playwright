import test, { Page } from "@playwright/test";
import { ComputerType } from "../../types/ComputerType";
import { BuyingComputerFlow } from "../../test_flows/computer/BuyingComputerFlow";

test(`Test Buying Computer | First design`, async ({ page }) => {

    // TODO: Go to target page base on test data URL
    const testData: any = {
        type: ComputerType.cheap,
        ram: "2 GB"
    }

    // Init test Flow
    const testFlow: BuyingComputerFlow = new BuyingComputerFlow(page, testData);
    await testFlow.buildComputerSpecAndAddToCart();
    await testFlow.verifyShopingCart();
    await testFlow.checkOut();
    await testFlow.inputBillingAdd();
   //...

})
import test, { Page } from "@playwright/test";
import { ComputerType } from "../../types/ComputerType";
import { OrderComputerFlow } from "../../test_flows/computer/OrderComputerFlow";
import { StandardComputerComponent } from "../../models/components/computer/StandardComputerComponent";
import { CheapComputerComponent } from "../../models/components/computer/CheapComputerComponent";
import { ComputerComponentConstructor } from "../../models/pages/ComputerDetailsPage";
import { ComputerEssentialComponent } from "../../models/components/computer/ComputerEssentialComponent";
import { ExpensiveComputerComponent } from "../../models/components/computer/ExpensiveComputerComponent";

export interface ComputerDataType {
    ram: string,
    os?: string,
    computerCompClass: ComputerComponentConstructor<ComputerEssentialComponent>
}

test(`Test Buying Computer | First design`, async ({ page }) => {

    const testData: ComputerDataType = {
        ram: "2 GB",
        computerCompClass: ExpensiveComputerComponent,
    }

    const orderComputerFlow: OrderComputerFlow = new OrderComputerFlow(page, testData.computerCompClass, testData);
    orderComputerFlow.buildComputerSpecAndAddToCart();

})
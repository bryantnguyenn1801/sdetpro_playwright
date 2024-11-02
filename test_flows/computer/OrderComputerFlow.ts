import { Page } from "@playwright/test";
import { ComputerComponentConstructor, ComputerDetailsPage } from "../../models/pages/ComputerDetailsPage";
import { ComputerEssentialComponent } from "../../models/components/computer/ComputerEssentialComponent";

export class OrderComputerFlow {

    constructor(
        private page: Page,
        private computerCompClass: ComputerComponentConstructor<ComputerEssentialComponent>,
        private computerData: any
    ) {
        this.page = page;
        this.computerCompClass = computerCompClass;
        this.computerData = computerData;
    }

    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(this.computerCompClass);
        computerComp.selectRAM('safasfdasd');
    }

}
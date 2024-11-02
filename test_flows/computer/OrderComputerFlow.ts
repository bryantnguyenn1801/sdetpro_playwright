import { Page } from "@playwright/test";
import { ComputerComponentConstructor, ComputerDetailsPage } from "../../models/pages/ComputerDetailsPage";
import { ComputerEssentialComponent } from "../../models/components/computer/ComputerEssentialComponent";
import { ComputerDataType } from "../../test-data/computer/ComputerDataType";
import { LoginFlow } from "../LoginFlow";

export class OrderComputerFlow extends LoginFlow {

    constructor(
        page: Page,
        private computerData: ComputerDataType
    ) {
        super(page, computerData.loginCreds || { username: '', password: '' });
        this.computerData = computerData;
    }

    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(this.computerData.computerCompClass);
        await computerComp.selectHDD(this.computerData.hdd);
        await computerComp.selectRAM(this.computerData.ram);
    }

}
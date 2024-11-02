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
        const {
            processorType,
            hdd,
            ram,
            software,
            os
        } = this.computerData;
        await computerComp.unselectAllOptions();
        await computerComp.selectProcessor(processorType);
        await computerComp.selectHDD(hdd);
        await computerComp.selectRAM(ram);
        await computerComp.selectSoftware(software);
        if (os) {
            await computerComp.selectOS(os);
        }
    }

}
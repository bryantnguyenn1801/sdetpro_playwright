import { Page } from "@playwright/test";
import { ComputerComponent } from "../../models/components/computer/ComputerComponent";
import { ComputerType } from "../../types/ComputerType";
import { StandardComputerComponent } from "../../models/components/computer/StandardComputerComponent";
import { CheapComputerComponent } from "../../models/components/computer/CheapComputerComponent";
import { HomePage } from "../../models/pages/HomePage";

export class BuyingComputerFlow {

    constructor(private page: Page, private testData: any){
        this.page = page;
        this.testData = testData;
    }

    async selectRAM(){
        const homePage: HomePage = new HomePage(this.page);
        const computerComponent: ComputerComponent = homePage.computerComponent(this.testData.type);
        await computerComponent.selectRAM(this.testData.RAM);
        await computerComponent.doSthCommon();
    }


}
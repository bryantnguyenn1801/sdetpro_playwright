import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";


export class CheapComputerComponent extends ComputerEssentialComponent {

    constructor(component: Locator){
        super(component)
    }

    async selectRAM(type: string) {
        await this.selectCompOptions(type);
    }

    async selectHDD(type: string){
        await this.selectCompOptions(type);
    }

}

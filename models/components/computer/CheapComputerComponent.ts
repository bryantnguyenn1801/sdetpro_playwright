import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";


export class CheapComputerComponent extends ComputerEssentialComponent {

    constructor(component: Locator){
        super(component)
    }

    async selectRAM(type: string) {
        console.log('CheapComputerComponent | Select RAM');
    }

}
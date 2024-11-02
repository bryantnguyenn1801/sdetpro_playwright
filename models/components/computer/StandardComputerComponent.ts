import { Locator, Page } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export class StandardComputerComponent extends ComputerEssentialComponent {

    constructor(component: Locator){
        super(component)
    }

    async selectRAM(type: string) {
        console.log('StandardComputerComponent | Select RAM');
    }
    
    async selectHDD(type: string){
        console.log('StandardComputerComponent | Select HDD');
    }

}
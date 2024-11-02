import { Locator } from "@playwright/test";

import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export class ExpensiveComputerComponent extends ComputerEssentialComponent {

    constructor(component: Locator){
        super(component)
    }

    async selectRAM(type: string) {
        console.log('ExpensiveComputerComponent | Select RAM');
    }

}
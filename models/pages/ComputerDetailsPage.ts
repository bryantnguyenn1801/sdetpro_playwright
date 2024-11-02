import { Locator, Page } from "@playwright/test";
import { ComputerEssentialComponent } from "../components/computer/ComputerEssentialComponent";

export type ComputerComponentConstructor<Teo extends ComputerEssentialComponent> = new (componentClass: Locator) => Teo;

export class ComputerDetailsPage {

    constructor(private page: Page) {
        this.page = page;
    }

    computerComp<Teo extends ComputerEssentialComponent>(
        computerComponentClass: ComputerComponentConstructor<Teo>
    ): Teo {
        return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue));
    }

}
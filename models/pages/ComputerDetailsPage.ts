import { Locator, Page } from "@playwright/test";
import { ComputerEssentialComponent } from "../components/computer/ComputerEssentialComponent";
import { BasePage } from "./BasePage";

export type ComputerComponentConstructor<Teo extends ComputerEssentialComponent> = new (componentClass: Locator) => Teo;

export class ComputerDetailsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    computerComp<Teo extends ComputerEssentialComponent>(
        computerComponentClass: ComputerComponentConstructor<Teo>
    ): Teo {
        return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue));
    }

}
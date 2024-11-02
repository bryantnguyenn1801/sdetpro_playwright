import { Locator } from "@playwright/test";
import { selector } from "../SelectorDecorator";
import { BaseItemDetailsComponent } from "../BaseItemDetailsComponent";


export abstract class ComputerEssentialComponent extends BaseItemDetailsComponent {

    constructor(component: Locator) {
        super(component);
    }

    public abstract selectRAM(type: string);
    public abstract selectHDD(type: string);

    protected async selectCompOptions(type: string) {
        const selectorValue = `//label[contains(text(), "${type}")]`;
        await this.component.locator(selectorValue).click();
    }

}
import { Locator } from "@playwright/test";
import { selector } from "../SelectorDecorator";
import { BaseItemDetailsComponent } from "../BaseItemDetailsComponent";


export abstract class ComputerEssentialComponent extends BaseItemDetailsComponent {

    constructor(component: Locator) {
        super(component);
    }

    public abstract selectRAM(type: string);
    public abstract selectProcessor(type: string);

    async selectHDD(type: string) {
        await this.selectCompOptions(type);
    }

    async selectOS(type: string) {
        await this.selectCompOptions(type);
    }

    async selectSoftware(type: string) {
        await this.selectCompOptions(type);
    }
    protected async selectCompOptions(type: string) {
        const selectorValue = `//label[contains(text(), "${type}")]`;
        await this.component.locator(selectorValue).first().click();
    }

}
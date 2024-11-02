import { Locator } from "@playwright/test";
import { selector } from "../SelectorDecorator";

@selector('.product-essential')
export abstract class ComputerEssentialComponent {

    protected component: Locator;

    constructor(component: Locator){
        this.component = component;
    }

    public abstract selectRAM(type: string);

}
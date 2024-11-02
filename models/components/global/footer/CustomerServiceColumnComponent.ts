import { Locator } from "@playwright/test";
import { FooterColumnComponent } from "./FooterColumnComponent";
import { selector } from "../../SelectorDecorator";
import { log } from "console";

@selector('.column.customer-service')
export class CustomerServiceColumnComponent extends FooterColumnComponent {

    constructor(component: Locator){
        super(component);
    }
}
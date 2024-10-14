import { Locator } from "@playwright/test";
import { FooterColumnComponent } from "./FooterColumnComponent";

export class CustomerServiceColumnComponent extends FooterColumnComponent {

    public static selector: string = '.column.customer-service';

    constructor(component: Locator){
        super(component);
    }
}
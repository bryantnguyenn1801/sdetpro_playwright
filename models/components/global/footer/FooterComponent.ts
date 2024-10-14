import { Locator } from "@playwright/test";
import { InformationColumnComponent } from "./InformationColumnComponent";
import { CustomerServiceColumnComponent } from "./CustomerServiceColumnComponent";

export class FooterComponent {

    public static selector: string = '.footer';

    constructor(private component: Locator) {
        this.component = component;
    }

    informationColumnComp(): InformationColumnComponent {
        const compSel = InformationColumnComponent.selector;
        return new InformationColumnComponent(this.component.locator(compSel));
    }

    customerServiceColumnComp(): CustomerServiceColumnComponent {
        const compSel = CustomerServiceColumnComponent.selector;
        return new CustomerServiceColumnComponent(this.component.locator(compSel));
    }
    
}
import { Page } from "@playwright/test";
import HeaderComponent from "../components/global/HeaderComponent";
import { PageBodyComponent } from "../components/PageBodyComponent";
import { FooterColumnComponent } from "../components/global/footer/FooterColumnComponent";
import { FooterComponent } from "../components/global/footer/FooterComponent";
import { ComputerType } from "../../types/ComputerType";
import { StandardComputerComponent } from "../components/computer/StandardComputerComponent";
import { CheapComputerComponent } from "../components/computer/CheapComputerComponent";
import { ComputerComponent } from "../components/computer/ComputerComponent";

export class HomePage {

    constructor(private page: Page) {
        this.page = page;
    }

    headerComponent(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.selector));
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.selector));
    }

    /**
     * Solution 01: Directly use the component in test flow, not page
     * Solution 02: Using component in page
     *  - 1. Provide testData into PO
     * ---> Trade of: can't use narrow down searching scope anymore
     *  - 2. 
     * 
     */

}
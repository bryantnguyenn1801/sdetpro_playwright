import { Locator } from "@playwright/test";

export default class HeaderComponent {

    public static selector: string = '.header';
    private headerLogoSel = '.header-logo';

    constructor (private component: Locator){
        this.component = component;
    }

    // Narrow down searching scope
    headerLogo(): Locator {
        return this.component.locator(this.headerLogoSel);
    }

}
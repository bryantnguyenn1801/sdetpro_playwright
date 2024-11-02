import { Locator } from "@playwright/test";
import { selector } from "../SelectorDecorator";

@selector('.header')
export default class HeaderComponent {

    private headerLogoSel = '.header-logo';
    private shoppingCartLinkSelSel = '#topcartlink a';

    constructor(private component: Locator) {
        this.component = component;
    }

    headerLogo(): Locator {
        return this.component.locator(this.headerLogoSel);
    }

    async clickOnShoppingCartLink() {
        this.component.locator(this.shoppingCartLinkSelSel).click();
    }

}
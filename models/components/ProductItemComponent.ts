import { Locator } from "@playwright/test";

export class ProductItemComponent {

    public static selector: string = '.product-item';
    private productTitleSel = '.product-title';
    private productPriceSel = 'span[class*="actual-price"]';

    constructor(private component: Locator){
        this.component = component;
    }

    productTitleLoc(): Locator {
        return this.component.locator(this.productTitleSel);
    }

    productPriceLoc(): Locator {
        return this.component.locator(this.productPriceSel);
    }


}
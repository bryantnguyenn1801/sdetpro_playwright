import { Locator } from "@playwright/test";
import { selector } from "./SelectorDecorator";

@selector('.product-essential')
export class BaseItemDetailsComponent {

    protected component: Locator;

    private priceSel = '.product-price';
    private addToCartBtnSel = 'input[id^="add-to-cart-button"]';

    protected constructor(component: Locator){
        this.component = component;
    }

    public async getProductPrice(): Promise<number> {
        const priceLoc = this.component.locator(this.priceSel);
        return Number(await priceLoc.textContent());
    }

    public async clickOnAddToCartBtn(){
        await this.component.locator(this.addToCartBtnSel).click();
    }

}
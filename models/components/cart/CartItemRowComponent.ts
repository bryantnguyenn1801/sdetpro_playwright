import { Locator } from "@playwright/test";
import { selector } from "../SelectorDecorator";

@selector('.cart-item-row')
export class CartItemRowComponent {

    private unitPriceSel = '';
    private quantityInputSel = '';
    private subTotalSel = '';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async unitPrice(): Promise<number> {
        const unitPriceText = await this.component.locator(this.unitPriceSel).textContent();
        return Number(unitPriceText);
    }

    public async quantity(): Promise<number> {
        const quantityText = await this.component.locator(this.quantityInputSel).getAttribute('value');
        return Number(quantityText);
    }

    public async subTotal(): Promise<number> {
        const subTotalText = await this.component.locator(this.subTotalSel).textContent();
        return Number(subTotalText);
    }

}

import { Locator } from "@playwright/test";
import { selector } from "../SelectorDecorator";

@selector('.totals')
export class TotalComponent {

    private priceTableRowSel = 'table tr';
    private priceTypeSel = '.cart-total-left span';
    private priceValueSel = '.cart-total-right span';
    private termOfServiceCheckboxSel = '#termsofservice';
    private checkOutBtnSel = '#checkout';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async priceCategories(): Promise<any> {
        /**
         {
            Sub-Total:815.00
            Shipping:0.00
            Tax:0.00
            Total:815.00
         }
         */
        let priceCategories = {};
        const priceTableRowLocs = await this.component.locator(this.priceTableRowSel).all();
        for(let tableRow of priceTableRowLocs){
            const priceTypeText = await tableRow.locator(this.priceTypeSel).innerText();
            const priceValueText = await tableRow.locator(this.priceValueSel).innerText();
            priceCategories[priceTypeText] = Number(priceValueText);
        }
        return priceCategories;
    }

    public async acceptTOS() {
        await this.component.locator(this.termOfServiceCheckboxSel).click();
    }

    public async clickOnCheckOutBtn() {
        await this.component.locator(this.checkOutBtnSel).click();
    }

}
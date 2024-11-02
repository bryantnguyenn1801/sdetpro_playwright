import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CartItemRowComponent } from "../components/cart/CartItemRowComponent";
import { TotalComponent } from "../components/cart/TotalComponent";

export class ShoppingCartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async cartItemRowComponentList(): Promise<CartItemRowComponent[]> {
        const cartItemRowComponents = await this.page.locator(CartItemRowComponent.selectorValue).all();
        return cartItemRowComponents.map(comp => new CartItemRowComponent(comp));
    }

    public totalComponent(): TotalComponent {
        return new TotalComponent(this.page.locator(TotalComponent.selectorValue));
    }

}
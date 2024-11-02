import { Page } from "@playwright/test";

export class PageNavigator {

    private static SHOPPING_CART_LINK: string = '/cart';

    public static async gotoShoppingCartPage(page: Page) {
        await page.goto(this.SHOPPING_CART_LINK);
    }

}
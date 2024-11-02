import { Page } from "@playwright/test";
import { ComputerComponentConstructor, ComputerDetailsPage } from "../../models/pages/ComputerDetailsPage";
import { ComputerEssentialComponent } from "../../models/components/computer/ComputerEssentialComponent";
import { ComputerDataType } from "../../test-data/computer/ComputerDataType";
import { LoginFlow } from "../LoginFlow";
import { error } from "console";
import { ShoppingCartPage } from "../../models/pages/ShoppingCartPage";

export class OrderComputerFlow extends LoginFlow {
    private totalPrice: number;

    constructor(
        page: Page,
        private computerData: ComputerDataType
    ) {
        super(page, computerData.loginCreds || { username: '', password: '' });
        this.computerData = computerData;
    }

    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(this.computerData.computerCompClass);
        const {
            processorType,
            hdd,
            ram,
            software,
            os
        } = this.computerData;
        await computerComp.unselectAllOptions();
        const processorAdditionalPrice = this.getAdditionalPrice(await computerComp.selectProcessor(processorType));
        const hddAdditionalPrice = this.getAdditionalPrice(await computerComp.selectHDD(hdd));
        const ramAdditionalPrice = this.getAdditionalPrice(await computerComp.selectRAM(ram));
        const softwareAdditionalPrice = this.getAdditionalPrice(await computerComp.selectSoftware(software));
        let osAddtionalPrice: number = 0;
        if (os) {
            osAddtionalPrice = this.getAdditionalPrice(await computerComp.selectOS(os));
        }
        const originPrice: number = await computerComp.getProductPrice();
        let additionalPrice: number = processorAdditionalPrice + hddAdditionalPrice + ramAdditionalPrice + osAddtionalPrice + softwareAdditionalPrice;
        let itemPrice = originPrice + additionalPrice;
        let itemQuantity: number = await computerComp.getProductQuantity();
        this.totalPrice = itemPrice * itemQuantity;
        console.log(`totalPrice: ${this.totalPrice}`);

        // Add to Cart
        await computerComp.clickOnAddToCartBtn();
        const barNotiText = await computerDetailsPage.getBarNotiText();
        if (!barNotiText?.startsWith('The product has been added')) {
            throw new Error('Failed to add product to cart!');
        }

        // Navigate 
        await computerDetailsPage.headerComponent().clickOnShoppingCartLink();
    }

    private getAdditionalPrice(optionText: string | null): number {
        if (optionText === null) {
            optionText = '';
        }

        const regex = /\+\d+\.\d+/g;
        const matches = optionText.match(regex);
        if (matches) {
            return Number(matches[0].replace('+', '').trim());
        }
        return 0;
    }
    async verifyShoppingCart() {
        const shoppingCartPage = new ShoppingCartPage(this.page);
        const cartItemRowComponentList = await shoppingCartPage.cartItemRowComponentList();
        const totalComponent = await shoppingCartPage.totalComponent();

    }

    async agreeTOSAndCheckout() {
        throw new Error("TBD");
    }


}
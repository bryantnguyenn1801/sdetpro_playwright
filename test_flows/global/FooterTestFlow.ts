import { Page } from "@playwright/test";
import { HomePage } from "../../models/pages/HomePage";
import { FooterComponent } from "../../models/components/global/footer/FooterComponent";
import { FooterColumnComponent } from "../../models/components/global/footer/FooterColumnComponent";
import { deepStrictEqual } from 'assert';

export class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComp() {
        const homePage: HomePage = new HomePage(this.page);
        const footerComp: FooterComponent = homePage.footerComponent();
        await this.verifyInformationColumn(footerComp);
        await this.verifyCustomerServiceColumn(footerComp);
        await this.verifyMyAccountColumn(footerComp);
        await this.verifyFollowUsColumn(footerComp);
    }

    private async verifyInformationColumn(footerComp: FooterComponent) {
        const expectedLinkTexts: string[] =
            ['Sitemap', 'Shipping & Returns', 'Privacy Notice', 'Conditions of Use', 'About us', 'Contact us'];
        const expectedHrefs: string[] =
            ['/sitemap', '/shipping-returns', '/privacy-policy', '/conditions-of-use', '/about-us', '/contactus'];
        await this.verifyFooterColumn(footerComp.informationColumnComp(), expectedLinkTexts, expectedHrefs);
    }

    private async verifyCustomerServiceColumn(footerComp: FooterComponent) { }

    private async verifyMyAccountColumn(footerComp: FooterComponent) { }

    private async verifyFollowUsColumn(footerComp: FooterComponent) { }

    // FooterColumnComponent
    private async verifyFooterColumn(
        footerColumnComp: FooterColumnComponent,
        expectedLinkTexts: string[],
        expectedHrefs: string[]
    ) {
        const actualLinkTexts: string[] = [];
        const actualHrefs: string[] = [];
        const footerCompLinks = await footerColumnComp.links();
        for (let footerCompLink of footerCompLinks) {
            const footerLinkText = await footerCompLink.textContent();
            const footerLinkHref = await footerCompLink.getAttribute("href");
            actualLinkTexts.push(footerLinkText as string);
            actualHrefs.push(footerLinkHref as string);
        }
        deepStrictEqual(actualLinkTexts, expectedLinkTexts,
            `Actual link texts and expected link texts is not the same
            Actual: ${actualLinkTexts}
            Expected: ${expectedLinkTexts}`
        );
        deepStrictEqual(actualHrefs, expectedHrefs);
    }
}
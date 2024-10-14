import test from "@playwright/test";
import { FooterTestFlow } from "../../test_flows/global/FooterTestFlow";

const PAGES = [
    { pageName: 'HomePage', slug: '/' },
    { pageName: 'Login Page', slug: '/login' },
    { pageName: 'Register Page', slug: '/register' },
];

PAGES.forEach(page => {
    const { pageName, slug } = page;
    test(`Test footer component on ${pageName}`, async ({ page }) => {
        await page.goto(slug);
        const footerTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComp();
    })
})
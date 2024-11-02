import { Page } from "@playwright/test";

export class LoginFlow {

    constructor(protected page: Page, private loginCreds: { username: string, password: string }) {
        this.page = page;
        this.loginCreds = loginCreds;
    }

    async login() {
        return;
        // const { username, password } = this.loginCreds;
        // const loginPage = new LoginPage(this.page);
        // await loginPage.fillUsername(username);
        // await loginPage.fillUsername(password);
        // await loginPage.clickOnLoginBtn();
    }

}

class LoginPage {

    private usernameSel: string = "#username";
    private passwordSel: string = "#password";
    private loginBtnSel: string = "button[type='submit']";

    constructor(private page: Page) {
        this.page = page;
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameSel).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordSel).fill(password);
    }

    async clickOnLoginBtn() {
        await this.page.locator(this.loginBtnSel).click();
    }

}
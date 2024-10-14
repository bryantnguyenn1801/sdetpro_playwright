import { Page } from "@playwright/test";
import { LoginSelectors } from "./LoginSelector";

export default class LoginPage{
    // Scope to keep element's selector values

        private page: Page;
    // Constructor
        constructor(page: Page){
            this.page = page;
        }
    // Main interation methods
        async inputUsername(username: string){
            await this.page.locator(LoginSelectors.usernameSel).fill(username);
        }
        async inputPassword(password: string){
            await this.page.locator(LoginSelectors.passwordSel).fill(password);
        }
        async clickOnLoginBtn(){
            await this.page.locator(LoginSelectors.loginBtnSel).click();
        }
}
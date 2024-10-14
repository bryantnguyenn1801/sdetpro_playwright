import { Locator, Page } from "@playwright/test";
import { LoginSelectors } from "./LoginSelector";

export default class LoginPage{
    // Scope to keep element's selector values

        private page: Page;
    // Constructor
        constructor(page: Page){
            this.page = page;
        }
    // Main interation methods
        Username(): Locator{
            return this.page.locator(LoginSelectors.usernameSel);
        }
        Password(): Locator {
            return this.page.locator(LoginSelectors.passwordSel);
        }
        LoginBtn(): Locator{
            return this.page.locator(LoginSelectors.loginBtnSel);
        }
}
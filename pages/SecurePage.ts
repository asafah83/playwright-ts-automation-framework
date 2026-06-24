import { Page, Locator, expect } from "@playwright/test"
import { LoginPage } from "./LoginPage"

export class SecurePage {

    readonly page: Page

    readonly successMessage: Locator
    readonly logoutLink: Locator
    constructor(page: Page) {

        this.page = page

        this.successMessage = page.locator("#flash")
        this.logoutLink = page.getByRole("link", { name: "Logout" })
    }
    async getSuccessMessage() {
    }
    async logout() {
        await this.logoutLink.click()
        return new LoginPage(this.page)

    }

    async expectLoaded() {
    await expect(this.page).toHaveURL(/secure/)
}


}
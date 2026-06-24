import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { SecurePage } from "../pages/SecurePage"

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page)
    await loginPage.goto()
})

test("Valid Login", async ({ page }) => {
    const securePage = await loginPage.login(
        "tomsmith",
        "SuperSecretPassword!"
    )

    await expect(page).toHaveURL(/secure/)

    const message = await securePage.getSuccessMessage()
    expect(message).toContain("You logged into a secure area!")
})

test("Invalid Login", async ({ page }) => {
    await loginPage.login(
        "tomsmith",
        "wrongPassword"
    )

    await expect(page).toHaveURL(/login/)
    await expect(page.getByText("Your password is invalid!")).toBeVisible()
})

test("Logout", async ({ page }) => {
    const securePage = await loginPage.login(
        "tomsmith",
        "SuperSecretPassword!"
    )

    await securePage.logout()

    await expect(page).toHaveURL(/login/)
})
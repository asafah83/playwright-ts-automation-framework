import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { SecurePage } from "../pages/SecurePage"

// tests/login.spec.ts
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


//   const securePage = await loginPage1.login(
//       "tomsmith",
//       "SuperSecretPassword!"
//   )
//   await expect(page).toHaveURL(/secure/)
//   await expect(page.getByText("You logged into a secure area!")).toBeVisible()

// const loginPage2 = await securePage.logout()

// await expect(page).toHaveURL(/login/)
//})
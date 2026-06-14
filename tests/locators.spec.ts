import { test, expect } from "@playwright/test"

test("Click Get started link", async ({ page }) => {
    await page.goto("https://playwright.dev")

    const getStartedLink = page.getByRole("link", { name: "Get started" })

    await expect(getStartedLink).toBeVisible()

    await getStartedLink.click()

    await expect(page).toHaveURL(/.*docs\/intro/)
})

test("Find Playwright heading", async ({ page }) => {
    await page.goto("https://playwright.dev")

    const heading = page.getByRole("heading", {
        name: /Playwright enables reliable/
    })

    await expect(heading).toBeVisible()
})
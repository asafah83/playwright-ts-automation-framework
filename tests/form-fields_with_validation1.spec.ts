import { test, expect } from "@playwright/test"

test("Search for locator", async ({ page }) => {

    await page.goto("https://playwright.dev")

    const searchButton = page.getByRole("button", {
        name: "Search"
    })

    await searchButton.click()

    const searchInput = page.getByPlaceholder("Search docs")

    await searchInput.fill("locator")

    await searchInput.press("Enter")

await expect(page.getByText("locator").first()).toBeVisible()})
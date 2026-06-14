import { test, expect } from "@playwright/test"

test("Select language", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/dropdown")

    const dropdown = page.locator("#dropdown")

    await dropdown.selectOption("Option 1")

    await expect(dropdown).toHaveValue("1")

})
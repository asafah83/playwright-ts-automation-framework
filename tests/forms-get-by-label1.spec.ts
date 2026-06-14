import { test, expect } from "@playwright/test"

test("Fill email field", async ({ page }) => {

    await page.goto("https://demoqa.com/text-box")

    const emailField = page.getByPlaceholder("name@example.com")

    await emailField.fill("asaf@test.com")

    await expect(emailField).toHaveValue("asaf@test.com")

    const fullNameField = page.getByPlaceholder("Full Name")

await fullNameField.fill("Asaf Cohen")

await expect(fullNameField).toHaveValue("Asaf Cohen")

})
import test from "@playwright/test"

test.only("Demo project", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    const username = page.getByPlaceholder("Username")
    await username.fill("standard_user")
    const Password = page.getByPlaceholder("Password")
    await Password.fill("secret_sauce")
    await page.locator(".submit-button.btn_action").click()
    const product_titles = await page.locator(".inventory_item_name").allTextContents()
    console.log(product_titles)
    const count = await page.locator(".inventory_item_name").count()
    console.log(count)
    const buy_product = 'Sauce Labs Backpack'
    for (let i = 0; i < count; i++) {
        if (await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").textContent() == buy_product) {

        }

    }
    await page.waitForTimeout(3000)

})
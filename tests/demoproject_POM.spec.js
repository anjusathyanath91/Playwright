import test, { expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"

test.only("Demo project", async ({ page }) => {
    let productname = 'Sauce Labs Backpack'
    let loginpage = new LoginPage(page)
    let productpage = new ProductPage(page)
    await loginpage.gotourl()
    await loginpage.validateuser()
    await productpage.listproducts()
    await productpage.addtocart(productname)
    await productpage.gotocart()

    const item_in_cart = page.locator(".inventory_item_name")
    const item_name_in_cart = await item_in_cart.textContent()
    expect(item_name_in_cart).toBe(productname)
    const checkout_button = page.locator(".btn.btn_action.btn_medium.checkout_button")
    await checkout_button.click()
    const firstname = page.getByPlaceholder("First Name")
    await firstname.fill("Anju")
    const last_name = page.getByPlaceholder("Last Name")
    await last_name.fill("S")
    const zipcode = page.getByPlaceholder("Zip/Postal Code")
    await zipcode.fill("679575")
    const continue_button = page.locator("#continue")
    await continue_button.click()
    const finishbutton = page.locator("#finish")
    await finishbutton.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    const thanks_msg = await page.locator(".complete-header")
    const actual_msg = await thanks_msg.textContent()
    console.log(actual_msg)
    expect(actual_msg).toContain("Thank you for your order!")
    await page.waitForTimeout(3000)

})
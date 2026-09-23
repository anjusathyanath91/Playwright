import test, { expect } from "@playwright/test"
import { customtest } from "../utils/customlogindata"
import { mytest } from "../utils/SampleCustom"
import {logintest} from "../utils/testlogin"
test.skip("Demo project", async ({ page }) => {
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
            console.log(await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").textContent())
            const addtocartbutton = page.locator(".inventory_item_description").nth(i).locator(".btn.btn_primary.btn_small.btn_inventory")
            await addtocartbutton.click()
        }

    }
    const shopping_cart_icon = page.locator(".shopping_cart_link")
    await shopping_cart_icon.click()
    const item_in_cart = page.locator(".inventory_item_name")
    const item_name_in_cart = await item_in_cart.textContent()
    expect(item_name_in_cart).toBe(buy_product)
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

/*customtest.skip("custom test" + user, async ({ page, logindata }) => {
    console.log(user)
    //const currentuser = user[i]
    await page.goto("https://www.saucedemo.com/")
    const username = page.getByPlaceholder("Username")
    await username.fill(logindata.username)
    const Password = page.getByPlaceholder("Password")
    await Password.fill(logindata.password)
    await page.locator(".submit-button.btn_action").click()
})*/

/*
mytest("Sample Custom Mytest", async ({ page, userlist }) => {
    for (const user of userlist) {
        await page.goto("https://www.saucedemo.com/")
        const userid = await page.getByPlaceholder("Username")
        await userid.fill(user.validusername)
        const password = await page.getByPlaceholder("Password")
        await password.fill(user.validpassword)
        await page.locator("#login-button").click()
    }

})*/

logintest("Locator Custom Test",async ({page,loginfixture})=>{
    await loginfixture("standard_user","secret_sauce")
})
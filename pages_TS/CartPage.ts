import { expect, Locator, Page } from "@playwright/test"

export class CartPage {
    page: Page
    item_in_cart: Locator
    checkout_button: Locator
    constructor(page: Page) {
        this.page = page
        this.item_in_cart = page.locator(".inventory_item_name")
        this.checkout_button = page.locator(".btn.btn_action.btn_medium.checkout_button")

    }
    async checkcartitem(productname: string) {
        const item_name_in_cart = await this.item_in_cart.textContent()
        expect(item_name_in_cart).toBe(productname)
        await this.checkout_button.click()
    }
}
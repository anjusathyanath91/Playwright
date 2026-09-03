import { expect } from "@playwright/test"

export class CartPage {
    constructor(page) {
        this.page = page
        this.item_in_cart = page.locator(".inventory_item_name")
        this.checkout_button = page.locator(".btn.btn_action.btn_medium.checkout_button")

    }
    async checkcartitem(productname) {
        const item_name_in_cart = await this.item_in_cart.textContent()
        expect(item_name_in_cart).toBe(productname)
        await this.checkout_button.click()
    }
}
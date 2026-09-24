import { expect } from "@playwright/test"

export class CartPage {
    constructor(page) {
        this.page = page
        this.checkout_button = page.locator(".btn.btn_action.btn_medium.checkout_button")

    }
    async checkcartitem(productname) {
        const cart_item = this.page.locator(".inventory_item_name", { hasText: productname })
        const cart_name = await cart_item.textContent()
        console.log(cart_name)
        expect(cart_name).toBe(productname)
        await this.checkout_button.click()
    }
}


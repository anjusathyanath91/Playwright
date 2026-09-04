import { Locator, Page } from "@playwright/test"

export class ProductPage {
    page: Page
    product_titles: Locator
    count: Locator
    addtocartbutton: Locator
    shopping_cart_icon: Locator
    countproducts: number

    constructor(page: Page) {
        this.countproducts = 0
        this.page = page
        this.product_titles = page.locator(".inventory_item_name")
        this.count = page.locator(".inventory_item_name")
        this.addtocartbutton = page.locator(".inventory_item_description").locator(".btn.btn_primary.btn_small.btn_inventory")
        this.shopping_cart_icon = page.locator(".shopping_cart_link")
    }
    async listproducts() {
        const productnames = await this.product_titles.allTextContents()
        console.log(productnames)
        this.countproducts = await this.count.count()
        console.log(this.countproducts)

    }
    async addtocart(buy_product: string) {
        for (let i = 0; i < this.countproducts; i++) {
            if (await this.page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").textContent() == buy_product) {
                console.log(await this.page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").textContent())
                await this.addtocartbutton.nth(i).click()
            }

        }
    }
    async gotocart() {
        await this.shopping_cart_icon.click()
    }
}
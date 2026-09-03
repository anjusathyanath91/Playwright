import { expect } from "@playwright/test"

export class CheckoutPage {
    constructor(page) {
        this.page = page
        this.firstname = page.getByPlaceholder("First Name")
        this.last_name = page.getByPlaceholder("Last Name")
        this.zipcode = page.getByPlaceholder("Zip/Postal Code")
        this.continue_button = page.locator("#continue")
        this.finishbutton = page.locator("#finish")
        this.thanks_msg = page.locator(".complete-header")

    }
    async customerdetails() {
        await this.firstname.fill("Anju")
        await this.last_name.fill("S")
        await this.zipcode.fill("679575")
        await this.continue_button.click()
    }

    async finishcheckout() {
        await this.finishbutton.click()
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")  
    }
    async thanksmessagechecking(){
        const actual_msg = await this.thanks_msg.textContent()
        console.log(actual_msg)
        expect(actual_msg).toContain("Thank you for your order!")
        await this.page.waitForTimeout(3000)
    }
}
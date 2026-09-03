import { expect } from "@playwright/test"

export class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.getByPlaceholder("Username")
        this.Password = page.getByPlaceholder("Password")
        this.login_button = page.locator("#login-button")
        this.errormsgdiv=page.locator(".error-message-container.error")
        
    }
    async gotourl() {
        await this.page.goto("https://www.saucedemo.com/")
    }
    async validateuser(uname,pwd) {
        await this.username.fill(uname)
        await this.Password.fill(pwd)
        await this.login_button.click()
    }

    async invalidusername(invaliduname,pwd) {
        await this.username.fill(invaliduname)
        await this.Password.fill(pwd)
        await this.login_button.click()
    }

    async invalidpassword(uname, invalidpwd) {
        await this.username.fill(uname)
        await this.Password.fill(invalidpwd)
        await this.login_button.click()
    }

    async invalidunameandpwd(invaliduname, invalidpwd) {
        await this.username.fill(invaliduname)
        await this.Password.fill(invalidpwd)
        await this.login_button.click()
    }

    async loginerrormessage(){
      const message=await this.errormsgdiv.textContent()
        console.log(message)
        expect(message).toContain("Epic sadface")

    }


}


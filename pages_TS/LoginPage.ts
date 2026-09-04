import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {
    page:Page
    username:Locator
    Password:Locator
    login_button:Locator
    errormsgdiv:Locator

    constructor(page:Page) {
        this.page = page
        this.username = page.getByPlaceholder("Username")
        this.Password = page.getByPlaceholder("Password")
        this.login_button = page.locator("#login-button")
        this.errormsgdiv=page.locator(".error-message-container.error")
        
    }
    async gotourl() {
        await this.page.goto("https://www.saucedemo.com/")
    }
    async validateuser(uname:string,pwd:string) {

        await this.username.fill(uname)
        await this.Password.fill(pwd)
        await this.login_button.click()
    }

    async invalidusername(invaliduname:string,pwd:string) {
        await this.username.fill(invaliduname)
        await this.Password.fill(pwd)
        await this.login_button.click()
    }

    async invalidpassword(uname:string, invalidpwd:string) {
        await this.username.fill(uname)
        await this.Password.fill(invalidpwd)
        await this.login_button.click()
    }

    async invalidunameandpwd(invaliduname:string, invalidpwd:string) {
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


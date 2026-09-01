export class LoginPage {
    constructor(page) {
        this.page=page
        this. username = page.getByPlaceholder("Username")
        this. Password = page.getByPlaceholder("Password")
        this. login_button = page.locator("#login-button")
    }
    async gotourl(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async validateuser() {
        await this.username.fill("standard_user")
        await this.Password.fill("secret_sauce")
        await this.login_button.click()
    }
    
}


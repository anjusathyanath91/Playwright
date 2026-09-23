import test from "@playwright/test";

exports.logintest=test.extend({
    loginfixture:async({page},use)=>{
        const login = async(username,pwd)=>{
        await page.goto("https://www.saucedemo.com/")
        const userid =page.getByPlaceholder("Username")
        await userid.fill(username)
        const password =page.getByPlaceholder("Password")
        await password.fill(pwd)
        await page.locator("#login-button").click()
        }
        await use(login)
    }
})
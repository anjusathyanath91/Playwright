import { PageManager } from "../../pages/pagemanager.js";
import { chromium } from "@playwright/test";
import { After, AfterStep, Before, BeforeStep, setDefaultTimeout, Status } from "@cucumber/cucumber";
setDefaultTimeout(60*1000)
Before(async function () {
    console.log("Before hooks runs before the 1st step of each scenario")
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    this.page = await context.newPage()
    this.pagemanager = new PageManager(this.page)
    this.checkoutpage = this.pagemanager.getcheckoutpage()
})
BeforeStep(async function () {
    console.log("Run before all scenarios")
})
After(async function () {
    console.log("After last step of each scenario")
    if (this.page) {
        await this.page.close()
    }
    if (this.browser) {
        await this.browser.close()
    }
    if (this.context) {
        await this.context.close()
    }
})
AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: "failedscreenshot.png" })
        console.log("After every step")
    }

})  

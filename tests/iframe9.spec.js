import test from "@playwright/test"

test("Iframe", async ({ page }) => {
    await page.goto("https://demoqa.com/frames")
    const iframe=page.frameLocator("#frame1") //to locate iframe
    const heading=await iframe.locator("#sampleHeading").textContent() //to get content from iframe
    console.log(heading)
    await page.waitForTimeout(3000)

})

// for shadow dom: https://practice.expandtesting.com/shadowdom
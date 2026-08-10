import test from "@playwright/test";

test("sample title",async({browser})=>{ //=> called arrow function

//playwright fixtures need to be pass in the test function
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.amazon.in/")

})
// to run a specific file need to mention the js file name "npx playwright test basicfile2.spec.js"
import test from "@playwright/test";

test.skip("sample title",async({browser})=>{ //=> called arrow function

//playwright fixtures need to be pass in the test function
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.google.com/")

})

//test.only to run only one script
//test.skip to skip a testcase
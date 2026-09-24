import test, { expect } from "@playwright/test";
test("Screenshot",async({page})=>{
await page.goto("https://selenium.qabible.in/")
await page.screenshot({path:"home.png"}) //to get page screenshot
const selectdatepickermenu = page.getByRole("link", { name: "Date Pickers" })
await selectdatepickermenu.screenshot({path:"locator.png"}) //to get locator screenshot
})

test("Visual Comparison",async({page})=>{
await page.goto("https://selenium.qabible.in/")
await expect(page).toHaveScreenshot("screen1.png")
})
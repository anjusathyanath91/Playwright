import test, { expect } from "@playwright/test";
test("Radio button",async({page})=>{
await page.goto("https://selenium.qabible.in/")
await page.locator(".nav-link").nth(1).click() 
const radioLink=page.locator("//a[@href='radio-button-demo.php']") //locator using a variable
await radioLink.click() 
const radioButton=page.getByRole("radio",{name:"Male"}).first() //radio is the role of the element,name is the visible text of that element 
await radioButton.click()
const value=await radioButton.isChecked()
await expect(value).toBe(true)
await expect(radioButton).toBeChecked()
await page.pause()
})
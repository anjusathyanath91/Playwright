import {test,expect} from "@playwright/test"; //expect is for assertion

//css selector by id,class and attribute

test("Locator example",async({page})=>{
await page.goto("https://selenium.qabible.in/")
//await page.locator("[href='simple-form-demo.php']").click() //attribute href =value
await page.locator(".nav-link").nth(1).click() //if class is the attribute we can use dot,if we have multiple class  with same name it will throw strict mode violation err.so we can use nth to denote the index value of element
await page.locator("#single-input-field").fill("hello") //if its id attribute we can use #
await page.pause()
})

test("checkbox",async({page})=>{
await page.goto("https://selenium.qabible.in/")
await page.locator(".nav-link").nth(1).click() 
await page.locator("//a[@href='check-box-demo.php']").click() //xpath attribute[@tagname=value]
//await page.locator(".form-check-label").first().click()
//await page.locator(".form-check-label").first().check()//either we can use click or check

const checkbox=await page.locator(".form-check-label").first()
await checkbox.check()
const isCheck=await checkbox.isChecked() //to print the true or false value of assertion
console.log(isCheck)
await expect(isCheck).toBeTruthy()// value must be true 
await expect(checkbox).toBeChecked() //assertion to check whether the checkbox is selected or not

await checkbox.uncheck()
const isCheck2=await checkbox.isChecked()
console.log(isCheck2)
await expect(isCheck2).toBeFalsy()
await expect(checkbox).not.toBeChecked()
await page.pause()

})


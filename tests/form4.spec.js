import test, { expect } from "@playwright/test";

test("Form",async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const selectInputForm=page.getByRole("link",{name:"Input Form"})
    await selectInputForm.click()
    const selectInput=page.getByRole("link",{name:"Form Submit"}).first()
    await selectInput.click()
    await page.getByPlaceholder("First name").fill("xyz") //locator using placeholder
    await page.locator("#validationCustom02").fill("pqr")
    await page.locator("input[type='text'][id='validationCustomUsername']").fill("@abc")//locator using 2 attributes ,here its type and id
    await page.locator(".form-control#validationCustom03").fill("Kolkata") //class and id f city input field
    await page.locator(".form-control#validationCustom04").fill("West Bengal")
    await page.locator(".form-control#validationCustom05").fill("142630")
    await page.locator("#invalidCheck").check()
    const submitbutton=page.getByRole("button",{name:"Submit form"})
    await submitbutton.click()
    const successmsg=page.locator(".my-2")
    const checkmsg=await successmsg.textContent()
    console.log(checkmsg)
    expect(checkmsg).toContain("successfully!") //assertion using substring
    expect(successmsg).toHaveText("Form has been submitted successfully!")//tohavetext is a assertion only can use in a locator to find a text
    expect(successmsg).toHaveText(checkmsg)  //instead of 22nd line can pass the variable name here 
    const visibleText=await successmsg.isVisible()
    console.log(visibleText)
    await expect(visibleText).toBeTruthy()
    await expect(successmsg).toBeVisible()//instead of 26th we can use tobevsible assertion directly with the locator variable 
    //await expect(successmsg).not.toBeVisible() //negative case for tobevisible()
    await page.pause()

})
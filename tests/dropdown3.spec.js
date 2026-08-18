import test, { expect } from "@playwright/test";

test("Dropdown",async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const selectInputForm=page.getByRole("link",{name:"Input Form"})
    await selectInputForm.click()
    const selectInput=page.getByRole("link",{name:"Select Input"})
    await selectInput.click()
    
    const parentlocator=page.locator(".card-body").first() //locator chainig
    const selectdropdown=await parentlocator.locator(".form-control")
    await selectdropdown.selectOption("Green") //selectOption is used to select an item from dropdownlist
    const color=await selectdropdown.inputValue() //to get the value entered in the input box
    console.log(color)
    const selectedcolor=page.locator("#message-one") //locator to select the 'selected color' text
    const message=await selectedcolor.textContent() //textContent is used to fetch the text from a locator
    console.log(message)
    expect(message).toContain(color)//assertion
    //expect(message).toContain("Selected Color : "+color) 
    await page.pause()

  

})
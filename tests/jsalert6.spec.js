import test, { expect } from "@playwright/test";
test("JavaScript Alert", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/")
    const selectalertnmodals = page.getByRole("link", { name: "Alerts and Modals" })
    await selectalertnmodals.click()
    const jsalert = page.getByRole("link", { name: "Javascript Alert" })
    await jsalert.click()
    const clickmeyellowbtn = page.locator("//button[@class='btn btn-warning']")//locator using xpath

    page.on("dialog", async dialog => { //to locate jsalertbox, or can use code in single line as- page.on('dialog', dialog=>{dialog.accept()})
        await page.waitForTimeout(5000) //waiting time for alert box to be clicked
        await dialog.accept() //to click ok
        //await dialog.dismiss()  //to click cancel

    })
    await clickmeyellowbtn.click() //the button click should be given after the jsalert 
    const msgforaction = await page.locator('#confirm-demo').textContent()
    console.log(msgforaction)
    //expect(msgforaction).toContain("Cancel!") -it will pass only if we uncomment await dialog.dismiss()
    expect(msgforaction).toContain("OK!")
    await page.pause()

})
import test from "@playwright/test";
test("modals",async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const selectalertnmodals=page.getByRole("link",{name:"Alerts and Modals"})
    await selectalertnmodals.click()
    const bootstrap=page.getByRole("link",{name:"Bootstrap Modal"})
    await bootstrap.click()
    const launchmodalbtn=page.getByText("Launch modal").first()//locator using text
    await launchmodalbtn.click()
    const modalsavewindow=page.locator(".modal.fade.show") //locating the modal
    await modalsavewindow.click()
    const savechangebtn=modalsavewindow.getByText("Save changes")//instead of page here we can use modal name,this button is inside a modal
    await savechangebtn.click() 
    const closebtn=modalsavewindow.locator(".btn.btn-secondary").first()
    await closebtn.click()
    await page.pause()
})

test.only("Multiple modals",async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const selectalertnmodals2=page.getByRole("link",{name:"Alerts and Modals"})
    await selectalertnmodals2.click()
    const bootstrap2=page.getByRole("link",{name:"Bootstrap Modal"})
    await bootstrap2.click()
    const launchmodalbtn2=page.getByText("Launch modal").nth(1)
    await launchmodalbtn2.click()
    const launchmodal2=page.locator(".modal.fade.show") //locating the modal
    await launchmodal2.click()
    const launchanothermodalbtn=page.getByRole("button",{name:"Launch another modal"})
    await launchanothermodalbtn.click()
    const childmodalwindow=page.locator(".modal-content").nth(2)
    await childmodalwindow.click()
    const savechangebtn2=childmodalwindow.getByText("Save changes")
    await savechangebtn2.click() 
    await page.pause()


})
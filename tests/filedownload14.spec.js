import test from "@playwright/test"
test("@web File download",async({page})=>{
await page.goto("https://demoqa.com/upload-download")
const download_promise=page.waitForEvent('download')
const downloadbutton=page.locator(".btn.btn-primary")
await downloadbutton.click()
const download=await download_promise
await download.saveAs("E:/cloneplaywright/utils/downloaded.jpeg")
})
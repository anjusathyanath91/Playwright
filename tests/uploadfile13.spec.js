import test from "@playwright/test"
test("@web Single File upload",async({page})=>{
await page.goto("https://demoqa.com/upload-download")
const choosefile=page.locator("#uploadFile")
await choosefile.setInputFiles("E:/cloneplaywright/utils/excelforplaywright.xlsx") //to use setInputFiles the locator type should be "file"
await page.waitForTimeout(3000)
})

test("Multiple File upload",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
const mutiplefileuplaod=page.locator("#multipleFilesInput")
await mutiplefileuplaod.setInputFiles(['E:/cloneplaywright/utils/excelforplaywright.xlsx','C:/Users/User/Desktop/testfile.xlsx'])
console.log("multiple files uploaded")
await page.getByRole("button",{name:"Upload Multiple Files"}).click()
await page.waitForTimeout(3000)
})


import test from "@playwright/test";
test.only("date pickers", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/")
    const selectdatepickermenu = page.getByRole("link", { name: "Date Pickers" })
    await selectdatepickermenu.click()
    const enterdate = page.locator(".form-control.datepicker")
    await enterdate.click()
    await page.locator(".datepicker-days th.datepicker-switch").click()//locator chaining
    await page.locator(".datepicker-months th.datepicker-switch").click()

    const target_year = 2035
    const target_month = 1
    const target_date = 25
    while (true) {
        const yearrange = await page.locator(".datepicker-years th.datepicker-switch").textContent()
        console.log(yearrange)
        const startyear = await yearrange.split("-")[0]
        console.log(startyear)
        const endyear = await yearrange.split("-")[1]
        console.log(endyear)
        if (target_year >= startyear && target_year <= endyear) {
            break

        }
        if (target_year < startyear) {
            await page.locator(".datepicker-years th.prev").click()
        }
        else {
            await page.locator(".datepicker-years th.next").click()
        }
    }
  
    await page.locator(".datepicker-years .year",{hasText:target_year.toString()}).click()
    await page.locator(".month").nth(target_month-1).click()
    await page.locator(".datepicker-days .day",{hasText:target_date.toString()}).click()
    await page.pause()
})




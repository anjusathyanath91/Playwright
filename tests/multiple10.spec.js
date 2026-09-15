import { test } from "@playwright/test"

test("Multiple window2", async ({ page, context }) => { //context is a fixture to handle a new tab
    await page.goto("https://selenium.qabible.in/window-popup.php")
    const likeusonfb_btn = page.getByRole("link", { name: "  Like us On Facebook " })
    const [childwindow] = await Promise.all(
        [context.waitForEvent("page"), //promise is a js object.
        await likeusonfb_btn.click()])
    await childwindow.waitForLoadState()
    const childwndow_title = await childwindow.title()
    console.log(childwndow_title)
    // await childwindow.locator('//input[contains(@id,"_r_")]').first().fill("test@gmail.com") OR
    await childwindow.getByRole('textbox', { name: "email" }).fill("test@gmail.com")
    await childwindow.close()
})
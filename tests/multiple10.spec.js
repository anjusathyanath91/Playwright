import {test} from "@playwright/test"

test("Multiple window2", async ({ page,context }) => { //context is a fixture to handle a new tab
    await page.goto("https://selenium.qabible.in/window-popup.php")
    const likeusonfb_btn = page.getByRole("link", { name: "  Like us On Facebook " })
    const [childwindow]=await Promise.all(
    [context.waitForEvent("page"), //promise is a js object.
    await likeusonfb_btn.click()])
    await childwindow.waitForLoadState()
    const childwndow_title=await childwindow.title()
    console.log(childwndow_title)
    await childwindow.close()
})
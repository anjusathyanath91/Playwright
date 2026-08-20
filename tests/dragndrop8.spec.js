import test from "@playwright/test";

test("Drag and drop", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/")
    const dragndropmenu = page.getByRole("link", { name: "Others" })
    await dragndropmenu.click()
    const startingpoint = page.getByText("Draggable n°1")
    const endingpoint = page.locator("#mydropzone")
    await startingpoint.hover() //mouse hover
    await page.waitForTimeout(3000)
    await startingpoint.dragTo(endingpoint) //to drag and drop the content
    await page.waitForTimeout(3000)


})
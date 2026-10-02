import { When, Given, Then } from "@cucumber/cucumber";
import { PageManager } from "../../pages/PageManager.js";
import { chromium } from "@playwright/test";
let pagemanager
let checkoutpage
let browser
let context
let page
Given('Login to the ecommerce application using {string} and {string}', async function (username, password) {
  browser=await chromium.launch({headless:false})
  context=await browser.newContext()
  page=await context.newPage()
  pagemanager = new PageManager(page)
  const loginpage = pagemanager.getloginpage()
  await loginpage.gotourl()
  await loginpage.validateuser(username, password)
});

When('Add {string} to the cart', async function (productname) {
  const productpage = pagemanager.getroductpage()
  await productpage.listproducts()
  await productpage.addtocart(productname)
  await productpage.gotocart()
});

Then('Verify the {string} added to the cart', async function (productname) {
  const cartpage = pagemanager.getcartpage()
  await cartpage.checkcartitem(productname)
});

When('Enter customer details {string},{string} and {string}', async function (firstname, lastname, zip) {
  checkoutpage = pagemanager.getcheckoutpage()
  await checkoutpage.customerdetails(firstname, lastname, zip)
  await checkoutpage.finishcheckout()

});

Then('Verify the order placed', async function () {
  await checkoutpage.thanksmessagechecking()
});
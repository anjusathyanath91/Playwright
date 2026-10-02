import { When, Given, Then } from "@cucumber/cucumber";

Given('Login to the ecommerce application using {string} and {string}', async function (username, password) {

  const loginpage =this.pagemanager.getloginpage()
  await loginpage.gotourl()
  await loginpage.validateuser(username, password)
});

When('Add {string} to the cart', async function (productname) {
  const productpage =this.pagemanager.getroductpage()
  await productpage.listproducts()
  await productpage.addtocart(productname)
  await productpage.gotocart()
});

Then('Verify the {string} added to the cart', async function (productname) {
  const cartpage =this.pagemanager.getcartpage()
  await cartpage.checkcartitem(productname)
});

When('Enter customer details {string},{string} and {string}', async function (firstname, lastname, zip) {
  await this.checkoutpage.customerdetails(firstname, lastname, zip)
  await this.checkoutpage.finishcheckout()

});

Then('Verify the order placed', async function () {
  await this.checkoutpage.thanksmessagechecking()
});
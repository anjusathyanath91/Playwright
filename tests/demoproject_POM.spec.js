import test, { expect } from "@playwright/test"
import { PageManager } from "../pages/pagemanager"


test.only("Demo project", async ({ page }) => {
    let pagemanager=new PageManager(page) 
    let username = 'standard_user'
    let password = 'secret_sauce'
    let invalidusername = "abc"
    let invalidpassword = "12345"
    let productname = 'Sauce Labs Backpack'
    const loginpage=pagemanager.getloginpage() //get object from pagemanager 
    const productpage=pagemanager.getroductpage()
    const cartpage=pagemanager.getcartpage()
    const checkoutpage=pagemanager.getcheckoutpage()
  
    await loginpage.gotourl()
    await loginpage.invalidusername(invalidusername,password)
    await loginpage.loginerrormessage()
    await loginpage.invalidpassword(username,invalidpassword)
    await loginpage.loginerrormessage()
    await loginpage.invalidunameandpwd(invalidusername,invalidpassword)
    await loginpage.loginerrormessage()
    await loginpage.validateuser(username,password)

    await productpage.listproducts()
    await productpage.addtocart(productname)
    await productpage.gotocart()
    await cartpage.checkcartitem(productname)
    await checkoutpage.customerdetails()
    await checkoutpage.finishcheckout()
    await checkoutpage.thanksmessagechecking()

})
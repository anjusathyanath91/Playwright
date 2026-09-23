import test, { expect } from "@playwright/test"
import { PageManager } from "../pages/pagemanager"
import testdata from "../utils/testdata.json" with{type:"json"} //import json file
//const testdataobj=JSON.parse(JSON.stringify(testdata)) //convert json file to normal string using stringyfy method and then using parse method string to javascript object
for(const testdataobj of testdata){ //loop the testdata as it contains multiple objects
test("Demo project"+testdataobj.productname, async ({ page }) => {
    let pagemanager=new PageManager(page) 
    const loginpage=pagemanager.getloginpage() //get object from pagemanager 
    const productpage=pagemanager.getroductpage()
    const cartpage=pagemanager.getcartpage()
    const checkoutpage=pagemanager.getcheckoutpage()
  
    await loginpage.gotourl()
    await loginpage.invalidusername(testdataobj.invalidusername,testdataobj.password)
    await loginpage.loginerrormessage()
    await loginpage.invalidpassword(testdataobj.username,testdataobj.invalidpassword)
    await loginpage.loginerrormessage()
    await loginpage.invalidunameandpwd(testdataobj.invalidusername,testdataobj.invalidpassword)
    await loginpage.loginerrormessage()
    await loginpage.validateuser(testdataobj.username,testdataobj.password)

    await productpage.listproducts()
    await productpage.addtocart(testdataobj.productname)
    await productpage.gotocart()
    await cartpage.checkcartitem(testdataobj.productname)
    await checkoutpage.customerdetails(testdataobj.firstname,testdataobj.lastname,testdataobj.zip)
    await checkoutpage.finishcheckout()
    await checkoutpage.thanksmessagechecking()

})
}
import{LoginPage} from "../pages_TS/LoginPage"
import{ProductPage} from "../pages_TS/ProductPage"
import{CartPage} from "../pages_TS/CartPage"
import{CheckoutPage} from "../pages_TS/CheckoutPage"
import { Page } from "@playwright/test"
export class PageManager {
 loginpage:LoginPage
 productpage:ProductPage
 cartpage:CartPage
 checkoutpage:CheckoutPage

    constructor(page:Page) {
        this.loginpage= new LoginPage(page)
        this.productpage= new ProductPage(page)
        this.cartpage= new CartPage(page)
        this.checkoutpage= new CheckoutPage(page)
    }

    getloginpage() { //to return login page object to test file
        return this.loginpage
    }
    getroductpage(){
        return this.productpage
    }
    getcartpage(){
         return this.cartpage
    }
    getcheckoutpage(){
        return this.checkoutpage
    }
}
import { LoginPage } from "./LoginPage.js"
import { CartPage } from "./CartPage.js"
import { ProductPage } from "./ProductPage.js"
import { CheckoutPage } from "./CheckoutPage.js"
export class PageManager {

    constructor(page) {
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
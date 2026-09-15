import test from "@playwright/test"
exports.customtest = test.extend({
    logindata: { //logindata fixture
        username: "standard_user",
        password: "secret_sauce",
        invalidusername: "abc",
        invalidpassword: "12345",
        productname: "Sauce Labs Backpack",
        firstname: "Anju",
        lastname: "S",
        zip: "142562"

    },
       logindata2: { //logindata fixture
        username: "standard_user",
        password: "secret_sauce",
        invalidusername: "abc",
        invalidpassword: "12345",
        productname: "Sauce Labs Bike Light",
        firstname: "Anju",
        lastname: "S",
        zip: "142562"

    }
})
import test from "@playwright/test";

exports.mytest=test.extend({
    userlist:async({},use)=>{                  //destructuring
        await use([{
            validusername:"standard_user",
            validpassword:"secret_sauce"
        },
        {
            validusername:"locked_out_user",
            validpassword:"secret_sauce"
        }

        ])
    }
})



import test from "@playwright/test";

export const mytest=test.extend({
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



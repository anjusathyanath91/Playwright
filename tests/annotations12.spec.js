import test from "@playwright/test"
//test.fail("First test",async({page})=>{
    //console.log("Calling first testcase")
//})
test.skip("Second test",async({page})=>{
    console.log("Calling second testcase")
})
test.fixme("Third test",async({page})=>{
    console.log("Calling third testcase")
})
test("Fourth test",async({page})=>{
    test.slow()
    console.log("Calling fourth testcase")
})

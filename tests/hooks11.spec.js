import test from "@playwright/test";
import { fail } from "node:assert";
test.describe("Grouping",()=>{
test("First test",async({page})=>{
    console.log("Calling first testcase")
})
test("Second test",async({page})=>{
    console.log("Calling second testcase")
})
test.beforeAll("Before all hook",async({browser})=>{
    console.log("Run before all test cases")
})
test.afterAll("After all hook",async({browser})=>{
    console.log("Run after all test cases")
})
test.beforeEach("Before each hook",async({browser})=>{
    console.log("Run before each  test cases")
})
test.afterEach("After each hook",async({browser})=>{
    console.log("Run after each  test cases")
})

})
//only,skip,fail,fixme,slow
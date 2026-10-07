import test from "@playwright/test"

test("API",async({request})=>{
const response=await request.get("https://jsonplaceholder.typicode.com/posts/1")
//console.log(response)
const response_json=await response.json()
//console.log(response_json)
const response_status=await response.status()
//console.log(response_status)
const response_code=await response.statusText()
console.log(response_code)

})
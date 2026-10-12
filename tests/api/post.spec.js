import test, { expect } from "@playwright/test";

test("API Post",async({request})=>{
    const auth_data={
    "username" : "admin",
    "password" : "password123"
}
const response=await request.post('https://restful-booker.herokuapp.com/auth',{headers:{"Content-Type":"application/json"},data:auth_data})
console.log(await response.json())//to print token 
const response_json=await response.json()
expect(response_json.token).not.toBeNull()
})
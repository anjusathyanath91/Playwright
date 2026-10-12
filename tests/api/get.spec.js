import test, { expect } from "@playwright/test"

test("API",async({request})=>{
const response=await request.get("https://jsonplaceholder.typicode.com/posts/1")
//console.log(response)
const response_json=await response.json()
console.log(response_json)
const response_status=await response.status()
//console.log(response_status)
const response_code=await response.statusText()
//console.log(response_code)
expect(response_status).toBe(200)
expect(response_code).toBe('OK')
console.log(response.ok())
expect(response.ok()).toBeTruthy()
expect(response_json).toHaveProperty('userId',1)//to check whether property with a value exists
expect(response_json).toHaveProperty('title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
expect(response_json.body).toContain('suscipit')//to check a value inside a property
})
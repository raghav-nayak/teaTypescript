```ts
const User = {
    name: "Raghav",
    email: "raghav@example.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

createUser() // error - Expected 1 arguments, but got 0

createUser({}) // error - Argument of type '{}' is not assignable to parameter of type '{ name: any; isPaid: any; }'.

createUser({ name: "raghav", isPaid: true }) // correct way

createUser({ name: "raghav", isPaid: true, email: "raghav@example.com" }); // error: Object literal may only specify known properties, and 'email' does not exist in type '{ name: any; isPaid: any; }'.ts(2353)


let newUser = { name: "raghav", isPaid: true, email: "raghav@example.com" };

createUser(newUser); // works - even though you have an additional property email


function createUserOne(): {} { 
    return {}
}

// the function return an object with two properties with their types
function createUserTwo(): {name: string, isPaid: boolean} { 
    return {name: "raghav", isPaid: true}
}
```
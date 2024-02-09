let greetings: string = "Hello";
console.log(greetings);

let myNum = 6;

myNum.toUpperCase() // error - Property 'toUpperCase' does not exist on type 'number'.ts(2339)

greetings.toUpperCase()

greetings.tolowerCase() // error - Property 'tolowerCase' does not exist on type 'string'. Did you mean 'toLowerCase'?ts(2551)ˀ



// number
let userId: number = 334455.3;

userId.toExponential()

// boolean
let isLoggedIn: boolean = false;

// type inference
let someNumber = 10.3;

someNumber.toExponential(); // no error as ts infers the type based on the value assigned

export { };

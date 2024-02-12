inference is good in variable but not in functions

[never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) - represents values which are _never_ observed
[unknown](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown) - represents _any_ value. This is similar to the `any` type, but is safer because it’s not legal to do anything with an `unknown` value

```ts
function addTwo(num) { // num is inferred as any
    num.toUpperCase()
    return num + 2
}

addTwo("5")



function addTwoProper(num: number) {
    return num + 2
}

addTwoProper("a") // error - Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)



function getUpper(val: string) {
    return val.toUpperCase()
}

getUpper(4) // error - Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)




function signUpUser(name: string, email: string, isPaid: boolean) {
}

signUpUser("Raghav", "raghav@example.com", true)



// providing default values
let loginUser = (email: string, password: string, isPaid: boolean = false) => {
    if (isPaid === void 0) { // void 0 means undefined
        isPaid = false;
    }
}



function returnNumber(num: number): number {
    return "hello" // error - Type 'string' is not assignable to type 'number'.ts(2322)
}


// more than one type of values are returned
function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}



const languages = ["English", "Spanish", "French"] // infers as const languages: string[]

languages.map((language): string => { // language is parameter and string is the return type
    return `language is ${language}`
})




function consoleError(errMsg: string): void { // void: to denote this function does not return anything
    console.error(errMsg)
}


function handleError(errMsg: string): never { // never: return type never observed
    throw new Error(errMsg)
}
```
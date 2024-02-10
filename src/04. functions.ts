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
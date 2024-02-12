type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User) {

}

// you can create alias for data types too
type myString = string;
let userName: myString = "raghav";


createUser({})  // error - Argument of type '{}' is not assignable to parameter of type 'User'.

 

function createUser2(user: User): User {
    return {name: "", email: "", isActive: true}
}
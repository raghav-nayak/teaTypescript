// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User) {

// }

// // you can create alias for data types too
// type myString = string;
// let userName: myString = "raghav";


// createUser({})  // error - Argument of type '{}' is not assignable to parameter of type 'User'.

 

// function createUser2(user: User): User {
//     return {name: "", email: "", isActive: true}
// }




type dbUser = {
    readonly _id: string;  // readonly - non-editable field once assigned
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; // ? denotes it is an optional field
}

let myDbUser: dbUser = {
    _id: "1234",
    name: "raghav",
    email: "raghav@example.com",
    isActive: false
};

myDbUser.email = "raghav1@example.com";
myDbUser._id = "12345"; // error - Cannot assign to '_id' because it is a read-only property.ts(2540)




type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// mix and match of types using existing types
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

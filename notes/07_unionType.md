when you are getting more than one type of data, you can use `union` instead of `any`. 

Use it cautiously. You can add any number of type in the union

you need to use `|` symbol for this.

```ts
//union 
let score: number | string = 33;

score = 44;
score = "55";



type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let myUser: User | Admin = {
    name: "Raghav",
    id: 123
}

myUser = { username: "raghav", id: 1234 }




function getDbId(id: number | string) {
    console.log("DB id is", id);
}

getDbId(3); 
getDbId("4");



function getNewDbId(id: number | string) {
    id.toLowerCase() // error: Property 'toLowerCase' does not exist on type 'string | number'.
}

function getAnotherNewDbId(id: number | string) {
    if (typeof id === "string") { // at this point, (parameter) id: string | number
        id.toLowerCase() // when the code reaches this point, id is string
    }
}



// arrays

const intArray: number[] = [1, 2, 3, 4, "5"]; // error - Type 'string' is not assignable to type 'number'.ts(2322)

const stringArray: string[] = ["1", "2", 3]; // Type 'number' is not assignable to type 'string'.ts(2322)

const mixArray: (string | number)[] = ["1", "2", "3", "4", 5]; // it works
```


literal assignment
```ts
let pi: 3.14 = 3.14;


let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "middle";
seatAllotment = "crew"; // error - Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.ts(2322)
```

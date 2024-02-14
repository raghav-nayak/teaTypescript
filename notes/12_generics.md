- [documentation](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- to make a component reusable
- here component means functions, arrays etc.
- if you use `any`, it defeats the purpose of using typescript
- e.g.
```ts
function identity<Type>(arg:Type): Type {
	return arg
}
```

```ts
const scores: Array<number> = [];
const names: Array<string> = [];


function identityOne(value: boolean | number): boolean | number {
    return value
}

function identityTwo(value: any): any {
    return value
}

function identityThree<Type>(value: Type): Type {
    return value
}


identityThree(3); // function identityThree<3>(value: 3): 3
identityThree("hi"); // function identityThree<"hi">(value: "hi"): "hi"
identityThree(true); // function identityThree<true>(value: true): true



function identityFour<T>(value: T): T {
    return value
}




interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({});
```


### Generics in Array and Arrow functions

```ts

function getSearchProducts<T>(products: T[]): T {
    // do some db operations
    const myIndex = 3
    return products[myIndex]
}

// equivalent arrow function 
const getSomeSearchProducts = <T>(products: T[]): T => {
    return products[0]
}
```


### Generic classes

read [this](https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints)

```ts

function anotherFunction<T, U extends number>(valOne:T, valTwo: U): object {
    return {
        valOne, valTwo
    }
}

anotherFunction(10,100)
anotherFunction(3, "4") // error - Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)


interface Database {
    connection: string,
    username: string,
    password: string
}

function dbFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne, valTwo
    }
}

class DBClass implements Database {
    constructor(
        public connection: string,
        public username: string,
        public password: string
    ) { }
}

const dbObject = new DBClass("test1", "test2", "test3");

const dbInterfaceObject: Database = {
    connection: "testing1",
    username: "testing2",
    password: "testing3
}


dbFunction(100, dbObject);
dbFunction(100, dbInterfaceObject);
dbFunction(100, 100); // error - Argument of type 'number' is not assignable to parameter of type 'Database'.ts(2345)
```


```ts
interface Quiz {
    name: string
    type: string
}

interface Course {
    name: string
    author: string
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}
```

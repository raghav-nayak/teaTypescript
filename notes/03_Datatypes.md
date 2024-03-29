
- Number
- String
- Boolean
- Null
- Undefined
- Void
- Object
- Array
- Tuples
- Any -> not recommended
- Never
- unknown
many more..

`let variableName: type = value`

```ts
let greetings: string = "Hello";
console.log(greetings);

let myNum = 6;

myNum.toUpperCase() // error - Property 'toUpperCase' does not exist on type 'number'.ts(2339)

greetings.toUpperCase()

greetings.tolowerCase() // error - Property 'tolowerCase' does not exist on type 'string'. Did you mean 'toLowerCase'?ts(2551)ˀ

export { };
```



Primitive data types
- string
- number
- boolean

Note: - `number` is for numbers like `42`. **JavaScript** does not have a special runtime value for integers, so there’s no equivalent to `int` or `float` - everything is simply `number`

#### Type inference
if you write, 
`let someNumber = 10.3;`

Typescript infers this as
`let someNumber: number = 10.3;`

When there is obvious conversion, you don't have to write the datatype every time.

```ts
// number
let userId: number = 334455.3;

userId.toExponential()

// boolean
let isLoggedIn: boolean = false;

// type inference
let someNumber = 10.3;

someNumber.toExponential(); // no error as ts infers the type based on the value assigned
```


#### any
Do not use keyword

It means turn off the type for this variable.

We can use [noImplicitAny](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#noimplicitany) compiler flag to flag any implicit `any` as an error

```ts
let language; // Variable 'language' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7043)

function getLanguage() {
    return "Python";
}

language = getLanguage(); // No error


let name: string;

function getHero() {
    return true;
}

name = getHero(); // error - Type 'boolean' is not assignable to type 'string'.ts(2322)
```


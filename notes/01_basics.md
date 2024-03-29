Typescript(ts) 
- a superset of Javascript(js)
- not about reinventing js
- not a new programming language
- it is a development tool -> in production js code is sent
- gives type safety
- static checking

- Issues with JavaScript e.g.
```js
2 + "2" // 22
undefined + 2 // Nan
```

- analyzes the code as we type

How it works?
- write it in Typescript
- The ts code is transpiled into js

[playground](https://www.typescriptlang.org/play)
[official website](https://www.typescriptlang.org/)

```ts
console.log("Hello world");

let user = {
    name: "Raghav",
    age: 20
};

let email = user.email; // Error - Property 'email' does not exist on type '{ name: string; age: number; }'.

let numberOne = 3;
let numberTwo = 5;
let sum = numberOne + numberTwo;
console.log(sum)
```

equivalent js code
```js
"use strict";
console.log("Hello world");
let user = {
    name: "Raghav",
    age: 20
};
let email = user.email;
let numberOne = 3;
let numberTwo = 5;
let sum = numberOne + numberTwo;
console.log(sum);
```
available only in ts and not in js
tuples are specialized arrays with some restrictions
use it cautiously

```ts
// in this, there is no restriction of order of the elements
const mixUser: (string | number)[] = ["a", 1];


let tupleUser: [string, number, boolean];
tupleUser = ["a", 1, true]; // works - order is important

tupleUser = [1, false, "a"]; // error - Type 'number' is not assignable to type 'string'.ts(2322)


let rgb: [number, number, number] = [255, 231, 123];



type User = [number, string];

const newUser: User = [112, "example.com"];

const anotherUser: User = ["example.com", 12]; // error - Type 'string' is not assignable to type 'number'.ts(2322)



newUser.push(true); // error - Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

newUser.push(100); // non error - even though only two values are allowed, you can still push a new value
```
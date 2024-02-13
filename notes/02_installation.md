
```shell
$ npm i typescript -g

$ tsc -v
Version 5.3.3
```

`01_intro.js`
```typescript
let user = {
    name: "Raghav",
    age: 20
}

console.log("Raghav")
console.log(user)
```

`$ tsc 01_intro.ts`

when you run this command, it will create an equivalent js file

```js
var user = {
    name: "Raghav",
    age: 20
};
console.log("Raghav");
console.log(user);

```
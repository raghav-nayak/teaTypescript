
read [this](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

use `typeof` for before you operate on the variables

array -> object
null -> object
empty string 

```ts
// detection

function detectType(val: number | string ) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}


function provideId(id: string | null) {
    if (!id) {
        console.log("No id provided");
        return
    }
    id.toLowerCase()
}
```

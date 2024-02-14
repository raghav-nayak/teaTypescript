
```ts
// use "kind"
interface Circle {
    kind: "circle"
    radius: number
}

interface Square{
    kind: "square"
    side: number
}

interface Rectangle{
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else if (shape.kind === "square") {
        return shape.side * shape.side
    }
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.length
        default:
            const _defaultForShape: never = shape // exhaustive checking
            return _defaultForShape
    }
}
```
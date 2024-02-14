Interfaces
- With interfaces, we use `implements`

Classes
- classes use `extends` keyword to inherit from another class
- If a class wants to use interface, then it must use `implements`

Abstract classes
- objects cannot be created from abstract classes
- these work like blueprints
- the class extends abstract class must implement all the abstract methods
- you can define non-abstract methods with abstract classes; if you want, you can override the methods too.

```ts
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }
    
    getSepia(): void // error - Function implementation is missing or not immediately following the declaration.

    abstract getColor(): void // no error

    getReelTime(): number{
        return 10;
    }
}

const takePhotoObj = new TakePhoto("test1", "test2"); // error - Cannot create an instance of an abstract class.ts(2511)


class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getColor(): void {}
}
```

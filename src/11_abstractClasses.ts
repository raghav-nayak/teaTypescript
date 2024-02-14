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
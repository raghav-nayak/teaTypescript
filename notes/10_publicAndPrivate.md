
- public
	- by default
- private 
	in js, you can specify `#` in front of the field
- protected
	- this variable can be accessed in derived classes
- in class member function, we do not use `function` keyword
- getter
	- use `get` before the function name
- setter
	- use `set` before the function name
- inheritance
	- use extends

```ts
class User {
    public email: string;
    name: string;
    private readonly city: string = "Rivendall";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const user1 = new User("gollam@lotr.com", "Gollam");

user1.city // error - Property 'city' is private and only accessible within class 'User'.ts(2341)

user1.email = "gollamsprecious@gmail.com";



// in production, we use something like this
class AnotherUser {
    private readonly city: string = "Rivendall";
    private _courseCount = 1;

    protected _courseName: string = "Some course";

    constructor(
        public email: string,
        public name: string,
        private userId: string) {
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get getCourseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum: number) {
        if (courseNum) {
            throw new Error("Course count should be greater than 1")
        }
        this._courseCount = courseNum
    }
}



class SubUser extends AnotherUser {
    isFamily: boolean = true;

    changeCourseCount(courseCount) {
        this._courseCount = courseCount; // error - Property '_courseCount' is private and only accessible within class 'AnotherUser'.ts(2341)
    }

    changeCourseName(courseName) {
        this._courseName = courseName; // _courseName is protected type
    }
}
```
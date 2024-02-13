interface User {
    email: string,
    userId: number
}

const raghav: User = {
    email: "raghav@example.com",
    userId: 123
};





interface dbUser {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string

    // one way to declare a function
    startTrial: () => string
    // another way of declaring function
    getCoupon(couponName: string): number
}



const raghavan: dbUser = {
    dbId: 123,
    email: "raghavan@example.com",
    userId: 456,
    startTrial: () => {
        return "trial started";
    },
    getCoupon(name: "saving") { // name and couponName in the interface declaration may or may not match
        return 10
    }
};

raghavan.email = "raghavan@examples.com";
raghavan.dbId = 123456; // error - Cannot assign to 'dbId' because it is a read-only property.ts(2540)


// you can add new property to an existing interface
interface dbUser {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const adminUser: Admin = {
    email: "raghavadmin@example.com",
    userId: 1,
    role: "admin"
}

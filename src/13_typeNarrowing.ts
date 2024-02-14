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



// instanceof

function logValue(input: string | Date) {
    if (input instanceof Date) {
        console.log(input.toISOString());
    } else {
        console.log(input.toUpperCase());
    }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

// typescript is still confused whether it is fish or bird if we return boolean from isFish()
// function isFish(pet: Fish | Bird) {
//     return (pet as Fish).swim !== undefined 
// }

function isFish(pet: Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined // as - typecasting
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet 
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}
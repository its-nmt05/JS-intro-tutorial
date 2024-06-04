// let myName = "nirmalya      "
// let myChannel = "chai     "

// console.log(myName.trueLength)

let myHeros = ["thor", "ironman"]

let heroPower = {
    thor: "hammer",
    ironman: "suit",

    getIronManPower: function () {
        console.log(`Iron man has power: ${this.ironman}`)
    },
}

Object.prototype.nirmalya = function () {
    console.log("Nirmalya is present in all objects")
}

Array.prototype.heyNirmalya = function () {
    console.log("Nirmalya is present in all arrays")
}

// heroPower.nirmalya()
// myHeros.nirmalya()

// myHeros.heyNirmalya()
// heroPower.heyNirmalya()

// *** Inheritance ***

const User = {
    name: "chai",
    email: "chai@google.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
}

// Prototypal inheritance

// Teacher.__proto__ = User # old outdated approach

// modern syntax
Object.setPrototypeOf(Teacher, User) // equivalent to: Teacher.__proto__ = User

String.prototype.trueLength = function () {
    return this.trim().length
}

let anotherUser = "chaiAurCode    "
console.log(anotherUser.trueLength())
console.log("nirmalya    ".trueLength())
const user = {
    username: "nirmalya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from DB")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    },
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this) # { }

// *** Constructor Function ***

// new -> constructor function

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function () {
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("nirmalya", 6, true)
const userTwo = new User("ChaiAurCode", 9, false)

// console.log(userOne)
// console.log(userTwo)

// console.log(userOne.constructor)

// console.log(userOne instanceof User) # true
// console.log(userOne instanceof Object) # true
// console.log(userOne instanceof Date) # false

/*
The instanceof operator tests to see if the prototype property of a
constructor appears anywhere in the prototype chain of an object.
The return value is a boolean value.

Syntax: object instanceof constructor
*/
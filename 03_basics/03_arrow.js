const user = {
    username: "nirmalya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sammy"
// user.welcomeMessage()

// console.log(this) # in node enviroment, the global object {}, but in browser context, the global object is Window

// function chai() {
//     let username = "nirmalya"
//     console.log(this)
// }

// let chai = function chai() {
//     let username = "nirmalya"
//     console.log(this)    // In this case, "this" context is not empty
// }  

const chai = () => {    // arrow function: () => {}.
    let username = "nirmalya"
    console.log(this)   // In this case, "this" context is empty ({})
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2   # explicit return
// }

// const addTwo = (num1, num2) => num1 + num2  # implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {username: "nirmalya"}    # cannot return object in implicit function like this. Must use ({key: value})
const addTwo = (num1, num2) => ({username: "nirmalya"})

// console.log(addTwo(3, 4))

const myArray = [2, 5, 6, 9, 7]

// myArray.forEach(function () {})  # normal function
// myArray.forEach(() => {})    # arrow function with explicit return
// myArray.forEach(() => ())    # arrow function with implicit return


function sayMyName(name) {
    console.log("N")
    console.log("I")
    console.log("R")
    console.log("M")
    console.log("A")
    console.log("L")
    console.log("Y")
    console.log("A")
}

// sayMyName    # function reference
// sayMyName()  # function execution

// function addTwoNumbers(number1, number2) {   # the variables in the function definition are called parameters
//     console.log(number1 + number2)
// }

// addTwoNumbers(2, 3) # the variables in the function call statement are called arguments

function addTwoNumbers(number1, number2) {  
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(2, 3)
// console.log("Result:", result)

function loginUserMessage(userName = "sam") {
    if (!userName){
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("nirmalya"))

function calculateCartPrice (val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 700, 2000))

const user = {
    username: "nirmalya",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 500, 700]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([800, 300, 1200]))

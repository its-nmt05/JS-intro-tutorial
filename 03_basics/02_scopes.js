// Global scope
var c = 300
let a = 200

if (true) {         // Block scope
    let a = 10      // let respects block scope
    const b = 20
    var c = 30      // var does not respect block scope
    // console.log("INNER:", a) # 10
}

// console.log("OUTER:", a) # 200
// console.log(b)
// console.log(c)  # 30

function one() {
    const userName = "Nirmalya"

    function two() {
        const website = "google"
        console.log(userName)
    }
    // console.log(website)
    two()
}

// one()

if (true) {
    const userName = "Nirmalya"
    if (userName === "Nirmalya") {
        const website = " google"
        // console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)


// *** interesting ***

// console.log(addOne(2))
function addOne(num) {
    return num + 1
}

// console.log(addTwo(2))   # cannot access addTwo() before declaration
const addTwo = function(num) {
    return num + 2
}


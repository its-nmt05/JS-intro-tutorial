const userEmail = ""

// if(userEmail) {
//     console.log("Got user email")
// } else {
//     console.log("Didn't get user email")
// }

// falsy values
// false, 0, -0, BigInt: 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

const users = []

// if(users.length == 0){
//     console.log("Zero users")
// } else {
//     console.log("More than one user")
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length == 0) {
//     console.log("Object is empty")
// } else {
//     console.log("Object is not empty")
// }

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10   # 5
// val1 = null ?? 10    # 10
// val1 = undefined ?? 10  # 10
// val1 = null ?? 10 ?? 20  # 10
// val1 = null ?? undefined # undefined
// val1 = undefined ?? null # null

// console.log(val1)

// Ternary Operator: syntactic sugar for if-else

// condition ? true statement : false statement

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")
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
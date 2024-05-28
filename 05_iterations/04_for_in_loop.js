const myObject = {
    py: "Python",
    cpp: "C++",
    js: "Javascript",
    ts: "typescript" 
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`)
    
}

const programming = ["py", "cpp", "js", "ts"]

for (const key in programming) {
    // console.log(programming[key])
}

/*
    for-of loop iterates over values, whereas
    for-in loop iterates over keys.
    The keys in arrays and strings are the indices.
*/

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("JP", "Japan")

// for (const key in map) { # does not work. Map objects are not iterable in this manner
//     console.log(key)
// }
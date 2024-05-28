// for-of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(greet)
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("JP", "Japan")

for (const [key, value] of map) {
    // console.log(key, ":-" , value)
}

const myObject = {
    game1: 'Forza',
    game2: 'Valorant',
    game3: 'PUBG'
}

// for (const [key, value] of myObject) {   # for-of loop can't be used in objects
//     console.log(key, ":-" , value)
// }

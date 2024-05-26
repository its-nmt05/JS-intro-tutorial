const marvel_heroes = ["Thor", "Captain America", "Iron Man"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes)    # push adds elements to the existing array
// console.log(marvel_heroes)

const allHeroes = marvel_heroes.concat(dc_heroes)    // concat combines the arrays into a new array
// console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // ... => spread operator spreads the elments of the array into individual elements
// console.log(all_new_heroes)

const nested_array = [0, 1 , 2, [3, 4, 5], 6, [7, 8, [9]]]
const flat_array = nested_array.flat(Infinity)
// console.log(flat_array)

// console.log(Array.isArray("Marvel"))
// console.log(Array.from("Marvel"))
// console.log(Array.from({name: "Marvel"}))    // interesting

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3))



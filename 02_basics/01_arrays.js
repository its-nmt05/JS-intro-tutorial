// array

const myArray = [0, 1, 2, 3, 4, 5]
const heroes = ["Batman", "Spiderman", "Iron man"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2)

// Array methods

// myArray.push(6, 7)
// myArray.pop()

// myArray.unshift(9) # adds elements to the start of the array
// myArray.shift()  # removes the first element of the array

// console.log(myArray.includes(3))
// console.log(myArray.indexOf(3))

// const newArr = myArray.join(" ") # joins entire array into a string using the specified separator or ","

// console.log(newArr)
// console.log(myArray)

// slice, splice

// console.log("Original:", myArray)

const myn1 = myArray.slice(1, 3)    // slice => returns a copy from start to end (exclude). Original array is not mutated
// console.log(myn1)
// console.log("After slicing:", myArray)

const myn2 = myArray.splice(1, 3)   // splice => removes elements from startIndex. Original array no longer contains removed elements
// console.log(myn2)
// console.log("After splicing:", myArray)
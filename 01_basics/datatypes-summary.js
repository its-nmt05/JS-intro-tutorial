// Primitive => pass by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*
JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime rather than at compile time. 
In JavaScript, you don't need to specify the type of a variable when you declare it. 
Instead, the type of a variable is inferred from the value assigned to it, 
and it can change during the execution of the program.
*/

const score = 100
const scoreValue = 100.3    // Both are numbers. No special data-type for floats

const isLoggedIn = false
const outsidetemp = null
let userEmail   // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) # false 

// const bigNumber = 1234224313424325346476n # bigInt

// Reference (Non primitive) => Pass by reference
// Arrays, Objects, Functions

const heroes = ["spiderman", "iron man", "thor"]
const myObj = {
    name: "Nirmalya",
    age: 18,
    partners: {
        number: 3,
        names: []
    },  // embeded object
}   // object => everything inside {}

const myFunction = function (){
    console.log("hello world")
}
// console.log(typeof myFunction) # function

/*
Return type of variables in JavaScript:
1) Primitive Datatypes
       Number => number
       String => string
       Boolean => boolean
       null => object
       undefined => undefined
       Symbol => symbol
       BigInt => bigint

2) Non-primitive Datatypes
       Arrays => object
       Function => function
       Object => object
*/

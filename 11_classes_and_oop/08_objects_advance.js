const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const myNewObj = Object.create(null)
// console.log(myNewObj)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai not made");
    },
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false,  // can't loop through name
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof(value) !== 'function')
    console.log(`${key}: ${value}`)
}
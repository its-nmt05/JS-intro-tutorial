// singleton => creates unique instance of the object
// Object.create

// object literals => creates multiple instances of the object

const mySym = Symbol("key1")

const jsUser = {
  name: "Nirmalya",
  "full name": "Nirmalya Mallick Thakur", // can only be accessed using square brackets: ["full name"]
  age: 18,
  [mySym]: "value1",    // only way to use symbols as keys
  location: "Bhopal",
  email: "nirmalya@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]) # can't use Jsuser.full name
// console.log(jsUser[mySym])   # interesting 

jsUser.email = "nirmalya@apple.com"
// console.log(jsUser)

// Object.freeze(jsUser) # prevents from changing property attributes and values of an object
jsUser.email = "nirmalya@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")

}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`) // "this" keyword is a reference to the current object

}
 
// console.log(jsUser.greetingTwo())

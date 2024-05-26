const name = "Nirmalya"
const age = 18

// console.log(name + age + " years") out-dated approach

// console.log(`Hello my name is ${name} and my age is ${age}`) more modern approach using string interpolation

const gameName = new String('PUBG-PC-11.0.9')

// console.log(gameName.length) 
// console.log(gameName.toLowerCase()) 
// console.log(gameName.charAt(2)) 
// console.log(gameName.indexOf('B'))


const newString = gameName.substring(0, 4)
const anotherString = gameName.slice(-6, -1)
// console.log(anotherString)

const newStringOne = "      nirmalya      "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://www.google.com/search?q=Birds%20Nest"

// console.log(url.replace("%20", "-"))
// console.log(url.includes("google"))

// console.log(gameName.split('-'));
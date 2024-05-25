// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

// Try to avoid these types of operations as they don't represent logic very clearly

// console.log(null > 0)    # false
// console.log(null == 0)   # false
// console.log(null >= 0)   # true

// The reason is that an equality check == and comparisions > < >= <= work differently.
// Comparisions convert null to a number, treating it as 0. That's why null >= 0 is true 
// and null > 0 is false.

// console.log(undefined > 0) # false
// console.log(undefined == 0) # false
// console.log(undefined >= 0) # false

/*
The strict equality (===) operator checks whether its two operands are equal, 
returning a Boolean result. Unlike the equality operator, 
the strict equality operator always considers operands of different types to be different.
*/

// console.log(1 === '1')   # false
// console.log(1 == '1')   # true
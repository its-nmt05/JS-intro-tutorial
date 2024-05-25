let score = undefined;

// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a number: has a type of number)
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *** Operations ***

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2;
// console.log(str3)

// console.log("1" + 2) # 12
// console.log(1 + "2") # 12
// console.log("1" + 2 + 2) # 122
// console.log(1 + 2 + "2") # 32

// console.log( (3 + 4) * 5 % 3)   # always prefer readability while writing code

// Postfix
let x = 4;
let y = x++;
// console.log(`x: ${x}, y: ${y}`)  # x: 5, y: 4

/*
If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.
*/

// Prefix
let a = 4;
let b = ++a;
// console.log(`a: ${a}, b: ${b}`) # a: 4, b: 5

/*
If used prefix, with operator before operand (for example, ++x), 
the increment operator increments and returns the value after incrementing.
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => num + 10)

// const newNums = []
// myNums.forEach((num) => newNums.push(num + 10))

const newNums = myNums  // chaining of methods (map and filter) => output of one method becomes input for the next one
    .map((num) => num * 10)
    .map((num) => num - 10)
    .filter((num) => num >= 40)

// console.log(newNums)

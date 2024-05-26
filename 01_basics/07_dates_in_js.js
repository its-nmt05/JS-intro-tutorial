// Dates

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2024, 8, 12)
// let myCreatedDate = new Date(2024, 8, 12, 20, 30)
// let myCreatedDate = new Date("2024-09-12")
let myCreatedDate = new Date("09-12-2024");
// console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)) # convert it to seconds

let newDate = new Date();
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

console.log(
  newDate.toLocaleString("default", {
    year: "2-digit",
  })
);

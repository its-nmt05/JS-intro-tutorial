const coding = ["python", "cpp", "javascript", "ruby", "java"]

// coding.forEach(function(item) {
//     console.log(item)
// })

// coding.forEach((item) => console.log(item))

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)  # just give it the reference. Don't execute

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})


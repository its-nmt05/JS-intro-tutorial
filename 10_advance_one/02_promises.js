const promiseOne = new Promise((resolve, reject) => {
    // Do an async operation
    // DB calls, cryptography, network

    setTimeout(() => {
        console.log("Async task is completed")
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed")
})

new Promise((resolve, reject) => {
    // Promise 2
    setTimeout(() => {
        console.log("Async task 2 completed")
        resolve()
    }, 1000)
}).then(() => {
    console.log("Promise 2 consumed")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        !error
            ? resolve({ username: "Nirmalya", email: "nirmalya@example.com" })
            : reject("ERROR: Something went wrong")
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user)
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected")
    })

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        !error
            ? resolve({ username: "Javascript", email: "jsx@example.com" })
            : reject("ERROR: JS went wrong")
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(`[ERROR] ${error}`)
//     }
// }

// getAllUsers()

// this chaining of then block is also known as then-able

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(`[ERROR] ${error}`)
    })

// [VIDEO LINK]: https://www.youtube.com/watch?v=NJwRQgsu1Q8

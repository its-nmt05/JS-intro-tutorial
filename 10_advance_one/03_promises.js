const promiseOne = new Promise((resolve, reject) => {
    let error = true
    !error
        ? resolve({ username: "Nirmalya", id: "nmt@jsx" })
        : reject("[ERROR] 404 not found")
})

promiseOne.then((data) => {
    console.log(data)
})
// .catch((error) => {
//     console.log(error)
// })

/*
When a promise is rejected and the error/rejection is not handled in a catch block, then
the callback event "onunhandledrejection" is invoked for browsers and 
process.on("unhandledRejection", (reason, promise)) is invoked for runtime env's like node js.

If somehow an handler is attached to the rejected promise that has already caused an 
"unhandledrejection" event, then the callback event "onrejectionhandled" is furthur invoked for browsers 
and process.on("rejectionHandled", (promise)) is invoked for runtimes like node.
*/

process.on("unhandledRejection", (reason, promise) => {
    console.log("Please add handler:", reason)

    promise.catch((msg) => {
        console.log(msg)
    })
})

process.on("rejectionHandled", (promise) => {
    console.log("The rejected promise was handled:", promise)
})

// For browser

// window.onunhandledrejection = (e) => {
//     console.log(e)
// }

// For browser

// window.onrejectionhandled = (e) => {
//     console.log(e)
// }

const one = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "nmt", password: "123" })
    }, 2000)
})

const two = Promise.resolve("promiseTwo")

const three = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        !error
            ? resolve({ name: "nmt", id: "nmt@jsx" })
            : reject("[ERROR] unhandled exception")
    }, 1000)
})

// *** [Composition of Promises] ***

Promise.all([one, two, three])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.log(error)
    })

Promise.allSettled([one, two, three])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.log(error)
    })

/*
The difference between Promise.all() and Promise.allSettled() is that

 Promise.all() - If any promise rejects, it immediately rejects with that reason.
               - Useful when you need all promises to succeed.

 Promise.allSettled() - Always resolves with an array of objects describing
                        the outcome of each promise (either fulfilled or rejected).
                      - Useful when you want to know the result of each promise,
                        regardless of whether it resolves or rejects.
*/

// adapting old API's like setTimeout() to uses Promises
const improvedSetTimeout = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms))

improvedSetTimeout(1000)
    .then(() => console.log("Elpased time"))
    .catch((error) => console.log(error))

// Promise.any([one, two, three])
//     .then((values) => {
//         console.log(`[NEW] ${values}`)
//     })
//     .catch((e) => console.log(`[ERROR] ${e}`))

Promise.race([])
    .then((values) => {
        console.log(`[NEW] ${values}`)
    })
    .catch((e) => console.log(`[ERROR] ${e}`))

/*
The main difference b/w Promise.any() and Promise.race() is that:
    
    Promise.any():
        - Waits for the first promise to resolve.
        - If all promises reject, it rejects with an AggregateError containing all the rejection reasons.
        - Useful when you want at least one promise to succeed.
    
    Promise.race():
        - Waits for the first promise to settle (either resolve or reject).
        - Resolves or rejects with the outcome of the first settled promise.
        - Useful when you want the result of the fastest promise, regardless of whether it resolves or rejects.
*/
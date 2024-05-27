// const tinderUser = new Object() # singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Nirmalya",
            lastName: "Mallick Thakur"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2) # obj1 is the target, so it is modified
// const obj3 = Object.assign({}, obj1, obj2) # {} is the target, obj1 remains un-modified

const obj3 = {...obj1, ...obj2} // using spread operator
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "one@google.com"
    },
    {
        id: 2,
        email: "two@google.com"
    },
    {
        id: 3,
        email: "three@google.com"
    }
]

// users[1].email # access the email of the first user in the users array

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(Object.hasOwn(tinderUser, 'isLoggedIn')) # prefer to use this over hasOwnProperty()

// *** JSON ***

const course = {
    courseName: 'js in hindi',
    price: "999",
    courseInstructor: "nirmalya"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // syntactical sugar to make it easier to access object's properties
// console.log(courseInstructor)
// console.log(instructor)

// JSON object
// {
//     "name": "nirmalya",
//     "courseName": "js in hindi",
//     "price": "free"
// }
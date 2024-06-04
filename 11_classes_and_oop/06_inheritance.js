class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`[USERNAME] ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username) // super(username) => constructor User(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
const tea = new User("tea")

chai.addCourse()
chai.logMe()

tea.logMe()
// tea.addCourse()  #  tea doesn't have access to addCourse()

// console.log(chai instanceof Teacher) # true
// console.log(tea instanceof User) # true
// console.log(tea instanceof Teacher)  # false
// console.log(chai instanceof User)    # true    

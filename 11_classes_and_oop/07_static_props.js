class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`[USERNAME] ${this.username}`)
    }

    static createId() {
        return "123"
    }
}

const user = new User("nirmalya")
// user.createId()  object doesn't have access to static method createId()

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const me = new Teacher("me", "me@gmail.com")
me.logMe()
// me.createId() # even inherited object doesn't have access to static method createId()

// static methods can directly be accessed only by the class name
// since Teacher is extending(inheriting) from User, it also has access to static method createId()

console.log(User.createId())
console.log(Teacher.createId())

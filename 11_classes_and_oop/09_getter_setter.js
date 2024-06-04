class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    get username() {
        return this._username.toUpperCase()
    }

    set username(value) {
        this._username = value
    }

    get password() {
        return "Can't access field [PASSWORD]"
    }

    set password(value) {
        this._password = value
    }
}

const nirmalya = new User("nirmalya", "123")

console.log(nirmalya.password)
console.log(nirmalya.username)

function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        },
    })

    Object.defineProperty(this, "password", {
        get: function () {
            return "Can't access field [PASSWORD]"
        },
        set: function (value) {
            this._password = value
        },
    })
}

const one = new User("nmt@gmail.com", "123")

console.log(one.email)
console.log(one.password)

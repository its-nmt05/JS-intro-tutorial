const User = {
    _email: "nmt@gmail.com",
    _password: "123",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    },

    get password() {
        return "Can't access field [PASSWORD]"
    },

    set password(value) {
        this._password = value
    },
}

const tea = Object.create(User)

console.log(tea.email)
console.log(tea.password)
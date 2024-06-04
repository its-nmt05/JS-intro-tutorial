function setUsername(username) {
    // complex DB calls

    this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@openai.com", "sam")
console.log(chai)

/*
In browser: this = window
In Node: this = {} 
*/
const accountId = 144553
let accountEmail = "nirmalya@gmail.com"
var accountPassword = "12345"
accountCity = "Bhopal"  // should not declare variable like this 
let accountState;   // undeclared variable is of type 'undefined'

// accountId = 2    # assignmnet not allowed to a constant variable 

accountEmail = "new@google.com"
accountPassword = "12345678"
accountCity = "Mumbai"

/*
Prefer not to tuse var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


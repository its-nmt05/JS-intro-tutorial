// Immediately Invoked Function Expression (IIFE)

/*
    IIFE is a function that is immediately executed.
    Sometimes the pollution from global scope might create problems
    in the local scope of the function. So to remove the pollution of the global declarations,
    we use IIFE.
*/

(function chai() {  // named IIFE
    console.log("DB CONNECTED")
})();    // IIFE declaration

// ()() : first () is for function declaration, second () is for execution
// chai()

( (name) => console.log(`DB CONNECTED TWO ${name}`) )("nirmalya");  // un-named IIFE

/*
    execution of IIFE is in the same manner as a normal function,
    i.e., the first () which declares the function takes the parameters list
    and the second () expects us to pass the arguments
*/

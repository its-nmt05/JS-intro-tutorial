
/*
    initialization
    while(condition) {
        .
        .
        updatation
    }
*/

let index = 0
while(index <= 10) {
    // console.log(`value of index is ${index}`)
    index += 2
}

let myArray = ["batman", "superman", "joker", "flash"]
let i = 0
while(i < myArray.length) {
    // console.log(myArray[i])
    i++
}


let score = 11
do {
    console.log(`Score is ${score}`)
    score++
} while (score <= 10);

// do-while loop executes the code atleast once even if condition is not satisfied

/*
    The 'for' and 'while' loops are what we call 'entry control loops' 
    because they check the condition before entering the loop. 
    On the other hand, 'do-while' loops are known as 'exit control loops' 
    since they ensure that the loop body is executed at least once before checking the condition.
*/
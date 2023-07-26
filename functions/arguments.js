let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)


let getScoreText = function (name = 'Anonymous', score = 0) {
   return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)



let getTip = function (total, tipPercent = .25) {
    //return (total * tipPercent) + total
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
    //return `A ${tipPercent*100}% tip on $${total} would be $${total * tipPercent}`
}

let bill = getTip(40)
console.log(bill)




let name = 'Jen'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old.`)
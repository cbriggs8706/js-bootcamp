let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Dafault arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score
    // Learning better syntax
    return `Name: ${name} - Score: ${score} `
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
let getTip = function (total, tipPercent = .2) {
    // return 'Total: $' + total + ' - Tip: $' + (tipPercent * total)
        let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
    // could also be written like this:
    // return `A ${tipPercent * 100}% tip on $${total} would be $${tipPercent * total}`
}

let bill = getTip(50, .1)
console.log(bill)

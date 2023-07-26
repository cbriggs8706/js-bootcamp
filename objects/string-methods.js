// let name = '    Andrew Mead  '

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// let password = 'abc123password098'
// console.log(password.includes('password'))

// console.log(name.trim())


// Challenge
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}


console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!*&#%(*'))
console.log(isValidPassword('asdflkjnmpassword'))

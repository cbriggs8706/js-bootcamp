// Type Coercion - a string, a number, a boolean
// Avoid == (loose equality) because it doesn't take type into consideration

// console.log('5' + 5)
// console.log('5' - 5)

// This tries to convert them to the same type before comparing
// console.log('5' == 5)

// true gets converted to 1, false to 0
const value = true + 12
const type = typeof value
console.log(type)
console.log(value)
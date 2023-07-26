// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

// Step 1
let square = function (num) {
    let result = num * num
    return result
}

// Step 2
let value = square(3)
let otherValue = square(10)

// Step 3
console.log(value)
console.log(otherValue)

// Challenge Area

// Step 1: Define - convertFahrenheitToCelsius 
// Step 2: Call - Call a couple of times (32 -> 0) (68 -> 20)
// Step 3: Do something - print converted values


let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let firstTemp = convertFahrenheitToCelsius(32)
let secondTemp = convertFahrenheitToCelsius(68)

console.log(firstTemp)
console.log(secondTemp)
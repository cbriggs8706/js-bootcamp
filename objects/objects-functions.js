let bookOne = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let bookTwo = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}    

let bookSummary = getSummary(bookOne)
let otherBookSummary = getSummary(bookTwo)

console.log(bookSummary.pageCountSummary)

//Challenge


let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)
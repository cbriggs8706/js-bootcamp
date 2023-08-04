// Cody's Assignment
// Make a map to add 'speaks english' true or false to countries array
// feature to only print those that speak the new map

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


const getCountry = (cc, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const filteredCountries = data.map((country) => country.push('speaks-eng'))
            console.log(filteredCountries[0].name.common)
            callback(undefined, data.filteredCountries)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', 'https://restcountries.com/v3.1/all')
    request.send()
}
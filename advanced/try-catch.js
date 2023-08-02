const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip("A")
    console.log(result)
} catch (e) {
console.log(e.message)
console.log('catch block is running')
}



const something = function () {

}
console.log
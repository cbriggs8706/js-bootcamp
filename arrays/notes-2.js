const notes = [{
    title: 'My next trip',
    body: 'A trip to San Fran'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const index = notes.findIndex(function (something, index) {
    return something.title === 'Habits to work on'
})

console.log(index)

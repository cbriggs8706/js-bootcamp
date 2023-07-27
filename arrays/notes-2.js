const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]


const index = notes.findIndex(function (note, index) {
    return note.title === 'Habits to work on'
})

console.log(index)
const notes = [{
    title: 'My next trip',
    body: 'body 1'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('ne')
    const isBodyMatch = note.body.toLowerCase().includes('ne')
    return isTitleMatch || isBodyMatch
}) 
console.log(filteredNotes)

const note = findNote(notes, 'some other modification')
console.log(note)
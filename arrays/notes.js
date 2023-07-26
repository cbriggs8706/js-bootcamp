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

// console.log(notes.pop())
//notes.push('Note 4')

// console.log(notes.shift())
// notes.unshift('My First Note')

// notes.splice(1, 0, 'Note 1.5')

// notes[0] = "Note 1.0"


// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

// Cannot indexOf of an object like this with the ===
// console.log(notes.indexOf({}))

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
    
}
console.log(findNotes(notes, 'eating'))


// another way to write the above using findIndex instead of find:
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'some other office modifications')
// console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })

// console.log(index)
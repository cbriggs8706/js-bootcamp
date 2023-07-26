const notes = ['Note 1', 'Note 2', 'Note 3']

//console.log(notes.pop())
//notes.push('Note 4')

// console.log(notes.shift())
// notes.unshift('My First Note')

// notes.splice(1, 0, 'Note 1.5')

notes[0] = "Note 1.0"


notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)


for (let count = 2; count >= 0; count--) {
    console.log(count)
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}
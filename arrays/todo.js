const todos = ['Walk the dog', 'Take out trash', 'Feed chickens', 'Water garden', 'Wash dishes']

// console.log('You have ' + todos.length + ' todos:')
// console.log(todos[todos.length -5])
// console.log(todos[todos.length -2])

// todos.splice(2, 1)
// todos.push('Fold laundry')
// todos.shift()

console.log(`You have ${todos.length} todos:`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length -2]}`)

// todos.forEach(function (item, index) {
//     const num = index + 1
//     console.log(`${num}. ${item}`)
// })

for (let count = 0; todos.length > 0; count++) {
    console.log(todos[count])
}
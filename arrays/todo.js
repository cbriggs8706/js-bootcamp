const todos = [{
    text: 'Walk the dog',
    completed: true
}, {
    text: 'Take out trash',
    completed: false
}, {
    text: 'Feed chickens',
    completed: true
}, {
    text: 'Water garden',
    completed: false
}, {
    text: 'Wash dishes',
    completed: false
}]

// console.log('You have ' + todos.length + ' todos:')
// console.log(todos[todos.length -5])
// console.log(todos[todos.length -2])

// todos.splice(2, 1)
// todos.push('Fold laundry')
// todos.shift()

// console.log(`You have ${todos.length} todos:`)
// // console.log(`Todo: ${todos[0]}`)
// // console.log(`Todo: ${todos[todos.length -2]}`)

// todos.forEach(function (item, index) {
//     const num = index + 1
//     console.log(`${num}. ${item}`)
// })

// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }

// const deleteTodo = function (todos, todoText) {
//         const index = todos.findIndex(function (todo, index) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })

//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// }

const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return todo.completed === false
    })
}

console.log(getThingsToDo(todos))

// deleteTodo(todos, 'feed chickens')
// console.log(todos)
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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement ('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


// const paragraphs = document.querySelectorAll('p')

// // paragraphs.forEach(function (p) {
// //     if (p.textContent.includes('the')){
// //         p.remove()
// //     }
// // })


// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'You have 2 todos left'
// document.querySelector('body').appendChild(newParagraph)
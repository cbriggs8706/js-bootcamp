'use strict'

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoInput.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoInput.value = ''
})

document.querySelector('#filter-completed').addEventListener('change', (e) => {
    console.log(e.target.checked)
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
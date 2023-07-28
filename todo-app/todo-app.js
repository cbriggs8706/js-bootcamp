const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

     filteredTodos = filteredTodos.filter(function (todo) {
        return !filters.hideCompleted || !todo.completed
    //     if (filters.hideCompleted) {
    //         return !todo.completed
    //     } else {
    //         return true
    //     }
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoInput.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.todoInput.value = ''
})

document.querySelector('#filter-completed').addEventListener('change', function(e) {
    console.log(e.target.checked)
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
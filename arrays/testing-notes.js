const chores = ['task 1', 'task 2', 'task 3', 'task 4', 'task 5']

// console.log(`You have ${chores.length} chores.`)
// console.log(chores[0])
// console.log(chores[chores.length -2])

// You have x todos
// Print the first and second to last > Todo: walk the dog

// chores.forEach(function (chore, index) {
//     const num = index + 1
//     console.log(`${num}. ${chore}`)
// })

for (let chore = 0; chore <= 2; chore++) {
    console.log(chore)
}

for (let chore = 0; chore < chores.length; chore++) {
    console.log(chores[chore])
}
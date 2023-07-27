const account = {
    name: 'Andrew Mead',
    expenses: []
    
}

// Expense -> description, amount
// addExpense -> description, amount (add object onto expenses array with new data)
// getAccountSummary -> total up all expenses -> 'Andrew Mead has $1250 in expenses' (forEach get amount object and add it on to the variable)


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())


//console.log(`${account.name} has $${totalExpenses} in expenses`)
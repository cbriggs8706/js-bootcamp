const account = {
    name: 'Andrew Mead',
    expenses: []
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> 'Andrew Mead has $1250 in expenses'

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())

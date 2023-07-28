const account = {
    name: 'Andrew Mead',
    expenses: [],
    }

}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())
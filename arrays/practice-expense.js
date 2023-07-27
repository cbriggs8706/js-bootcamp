const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        balance = totalIncome - totalExpenses
            return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Paycheck', 2850)
account.addExpense('Auto Repair', 213)
account.addExpense('Coffee', 2)
account.addExpense('Car Payment', 267)
console.log(account.getAccountSummary())

// 2 methods: functions as object properties on account to create 1st one:
// addExpense -> (description, amount)
// getAccountSummary -> total up all expenses 'Andrew Mead has $1250 in expenses'
// total = forEach amount object and add it onto variable then add it into the template string


// add income array to account
// addIncome method -> description, amount
// tweak getAccountSummary
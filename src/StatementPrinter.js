export default class StatementPrinter {
    // Printer method
    static print = (transactionHistory) => {
        // Print statement header
        console.log(`date       || credit  || debit   || balance`)
        // Print each transaction, in reverse order of being added to match the table in the brief
        transactionHistory.reverse().forEach(transaction => {
            this.printTransaction(transaction)
        })
    }

    static printTransaction = (transaction) => {
        // Each transaction is printed in three sections: date, midsection and balance. A new line is printed after each one
        process.stdout.write(`${transaction.getDate()} || `)
        this.midSection(transaction)
        this.balance(transaction)
        process.stdout.write(`\n`)
    }

    static midSection = (transaction) => {
        // The amount is printed on the correct side of the middle column and in the correct colour depending on its type.
        // This is padded to the correct length and forced to two decimal places
        if (transaction.getType() === "deposit") {
            process.stdout.write(`\x1b[32m${transaction.getAmount().toFixed(2).padEnd(7)}\x1b[0m ||        `)
        } else { process.stdout.write(`        || \x1b[31m${transaction.getAmount().toFixed(2).padEnd(7)}\x1b[0m`) }
    }

    static balance = (transaction) => {
        // The balance after the transaction is printed, in red if the balance is negative
        if (transaction.getBalanceAfterTransaction() < 0) {
            process.stdout.write(` || \x1b[31m${transaction.getBalanceAfterTransaction().toFixed(2)}\x1b[0m`)
        } else {process.stdout.write(` || ${transaction.getBalanceAfterTransaction().toFixed(2)}`)}
    }

}
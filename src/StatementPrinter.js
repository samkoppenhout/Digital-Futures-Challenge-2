export default class StatementPrinter {
    static print = (transactionHistory) => {
        console.log(`date       || credit  || debit   || balance`)
        transactionHistory.reverse().forEach(transaction => {
            this.printTransaction(transaction)
        })
    }
    
    static printTransaction = (transaction) => {
        process.stdout.write(`${transaction.getDate()} || `)
        this.midSection(transaction)
        this.balance(transaction)
        process.stdout.write(`\n`)
    }

    static midSection = (transaction) => {
        if (transaction.getType() === "deposit") {
            process.stdout.write(`\x1b[32m${transaction.getAmount().toFixed(2).padEnd(7)}\x1b[0m ||        `)
        } else { process.stdout.write(`        || \x1b[31m${transaction.getAmount().toFixed(2).padEnd(7)}\x1b[0m`) }
    }

    static balance = (transaction) => {
        if (transaction.getBalanceAfterTransaction() < 0) {
            process.stdout.write(` || \x1b[31m${transaction.getBalanceAfterTransaction().toFixed(2)}\x1b[0m`)
        } else {process.stdout.write(` || ${transaction.getBalanceAfterTransaction().toFixed(2)}`)}
    }

}
export default class StatementPrinter {
    static print = (transactionHistory) => {
        console.log(`date       || credit  || debit   || balance`)
        transactionHistory.reverse().forEach(transaction => {console.log(this.concatenateTransaction(transaction))})
    }
    static concatenateTransaction = (transaction) => {
        return `${transaction.getDate()} || ${this.midSection(transaction)} || ${transaction.getBalanceAfterTransaction().toFixed(2)}`
    }
    static midSection = (transaction) => {
        if (transaction.getType() === "deposit") {
            return `${transaction.getAmount().toFixed(2).padEnd(7)} ||        `
        } else { return `        || ${transaction.getAmount().toFixed(2).padEnd(7)}`}
    }
}
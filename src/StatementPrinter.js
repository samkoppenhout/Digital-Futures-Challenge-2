export default class StatementPrinter {
    print = (transactionHistory) => {
        transactionHistory.forEach(transaction => {console.log(this.concatenateTransaction(transaction))})
    }
    concatenateTransaction = (transaction) => {
        return `${transaction.getDate()} || ${this.midSection(transaction)} || ${transaction.getBalanceAfterTransaction().toFixed(2)}`
    }
    midSection = (transaction) => {
        if (transaction.getType() === "deposit") {
            return `${transaction.getAmount().toFixed(2).padEnd(7)} ||        `
        } else { return `        || ${transaction.getAmount().toFixed(2).padEnd(7)}`}
    }
}
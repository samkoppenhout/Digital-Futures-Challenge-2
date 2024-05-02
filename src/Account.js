export default class Account {
    // Properties
    #balance = 0;
    #transactionHistory = [];

    // Methods
    getBalance = () => {
        return this.#balance;
    };
    getTransactionHistory = () => {
        return this.#transactionHistory;
    };

    addTransaction = (transaction) => {
        if (this.transactionIsValid(transaction) === true) {
            this.balanceChange(transaction.getAmount(), transaction.getType());
            transaction.setBalanceAfterTransaction(this.#balance);
            this.#transactionHistory.push(transaction);
        }
    };

    transactionIsValid = (transaction) => {
        if (this.isAboveBalance(transaction) && this.amountIsValid(transaction.getAmount())) {return true}
        else {return false}
    };

    isAboveBalance = (transaction) => {
        if ((transaction.getType() === "withdrawal"  && (transaction.getAmount() <= this.#balance)) || (transaction.getType() === "deposit")) { return true }
        else {return false}
    };

    balanceChange = (amount, type) => {
        if (type === "deposit") { this.#balance += amount }
        else if (type === "withdrawal") { this.#balance -= amount }
    };

    amountIsValid = (amount) => {
        if (typeof amount === "number" && amount > 0) { return true }
        else { return false }
    };
};
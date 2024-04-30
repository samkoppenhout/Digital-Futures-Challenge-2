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
            this.#transactionHistory.push(transaction);
            this.balanceChange(transaction.getAmount(), transaction.getType());
            transaction.setBalanceAfterTransaction(this.#balance);
        }
    };

    balanceChange = (amount, type) => {
        if (type === "deposit") { this.#balance += amount }
        else if (type === "withdrawal") { this.#balance -= amount }
    };

    transactionIsValid = (transaction) => {
        if (this.withdrawIsValid(transaction) === true && this.valueIsValid(transaction) === true) {return true}
        else {return false}
    };

    withdrawIsValid = (transaction) => {
        if (transaction.getAmount() <= this.#balance || transaction.getType() != "withdrawal") { return true }
        else {return false}
    };

    valueIsValid = (transaction) => {
            return true;
        }
};
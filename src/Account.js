export default class Account {
    // Properties
    #balance = 0;
    #transactionHistory = [];

    // Getters
    getBalance = () => {
        return this.#balance;
    };
    getTransactionHistory = () => {
        return this.#transactionHistory;
    };

    // Methods
    addTransaction = (transaction) => {
        if (this.transactionIsValid() === true) {
            this.#transactionHistory.push(transaction);
            this.balanceChange(transaction.getAmount(), transaction.getType());
            transaction.setBalanceAfterTransaction(this.#balance);
        }
    };

    balanceChange = (amount, type) => {
        if (type === "deposit") { this.#balance += amount }
        else if (type === "withdrawal") { this.#balance -= amount }
    };

    transactionIsValid = () => {
        return true;
    };
};
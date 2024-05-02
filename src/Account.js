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
        if (transaction.isValid() && this.isAboveBalance(transaction)) {
            this.balanceChange(transaction.getAmount(), transaction.getType());
            transaction.setBalanceAfterTransaction(this.#balance);
            this.#transactionHistory.push(transaction);
        }
    };

    isAboveBalance = (transaction) => {
        if ((transaction.getType() === "withdrawal"  && (transaction.getAmount() <= (this.#balance + transaction.getOverdraftLimit())) || (transaction.getType() === "deposit"))) { return true }
        else {return false}
    };

    balanceChange = (amount, type) => {
        if (type === "deposit") { this.#balance += amount }
        else if (type === "withdrawal") { this.#balance -= amount }
    };
};
export default class Account {
    // Properties
    #balance = 0;
    #transactionHistory = [];
    #overdraftLimit = 0;

    constructor(overdraftLimit) { 
        this.#overdraftLimit = overdraftLimit
    }
    

    // Methods
    getBalance = () => {
        return this.#balance;
    };
    getTransactionHistory = () => {
        return this.#transactionHistory;
    };

    tryAddTransaction = (transaction) => {
        try {
            this.addTransaction(transaction)
        } catch (error) {
            console.error('Transaction invalid:', error)
        }
    }

    addTransaction = (transaction) => {
        if (this.isAboveBalance(transaction)) {
            this.balanceChange(transaction.getAmount(), transaction.getType());
            transaction.setBalanceAfterTransaction(this.#balance);
            this.#transactionHistory.push(transaction);
        }
    };

    isAboveBalance = (transaction) => {
        if ((transaction.getType() === "withdrawal"  && (transaction.getAmount() <= (this.#balance + this.#overdraftLimit)) || (transaction.getType() === "deposit"))) { return true }
        else {
            throw new Error('Withdrawal cannot take your balance below 0 or your overdraft limit.')
            return false
        }
    };

    balanceChange = (amount, type) => {
        if (type === "deposit") { this.#balance += amount }
        else if (type === "withdrawal") { this.#balance -= amount }
    };
};
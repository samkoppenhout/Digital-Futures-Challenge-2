export default class Account {
    // Properties
    #balance = 0;
    #transactionHistory = [];
    #overdraftLimit = 0;

    constructor(overdraftLimit = 0) { 
        this.#overdraftLimit = overdraftLimit
    }
    

    // Methods
    getBalance = () => {
        return this.#balance;
    };
    getTransactionHistory = () => {
        return this.#transactionHistory;
    };

    // Wraps the addTransaction function in a try block to catch any errors
    tryAddTransaction = (transaction) => {
        try {
            this.addTransaction(transaction)
        } catch (error) {
            console.error('Transaction invalid:', error.message)
        }
    }

    // Adds a new transaction
    addTransaction = (transaction) => {
        // If the transaction passes the checks in validCheck
        if (this.validCheck(transaction)) {
            // Change the balance on the account
            this.balanceChange(transaction.getAmount(), transaction.getType());
            // Record the new balance on the transaction object
            transaction.setBalanceAfterTransaction(this.#balance);
            // Add the transaction to the transactionHistory
            this.#transactionHistory.push(transaction);
        }
    };

    validCheck = (transaction) => { 
        // If the amount passes the isAboveBalance test and is not already in the history array, return true.
        return (this.isAboveBalance(transaction) && !this.#transactionHistory.includes(transaction))
    };

    isAboveBalance = (transaction) => {
        // If the type is withdrawal, check that the amount is less than the balance plus the account's overdraft limit, otherwise throw an error
        if (!(transaction.getType() === "withdrawal"  && (transaction.getAmount() > (this.#balance + this.#overdraftLimit)))) { return true }
        else {
            throw new Error('A withdrawal cannot take your balance below 0.00 or your overdraft limit.')
        }
    };

    balanceChange = (amount, type) => {
        // Adjust the account balance by the given amount
        if (type === "deposit") { this.#balance += amount }
        else if (type === "withdrawal") { this.#balance -= amount }
    };
};
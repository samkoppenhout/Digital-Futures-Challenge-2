export default class Account {
    // Properties
    #balance = 0;
    #transactionHistory = [];
    #overdraftLimit = 0;

    constructor(overdraftLimit = 0) { 
        // Sets the overdraft limit to 0 if not set
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
            // Print a success message
            console.log(`Transaction Successful! You made a ${transaction.getType()} of ${transaction.getAmount().toFixed(2)}. Your balance is now ${this.#balance.toFixed(2)}.`);
        }
    };

    validCheck = (transaction) => { 
        // If the amount passes the isAboveBalance test and the transaction is not undefined or not already in the history array, return true.
        return (transaction !== undefined && this.isAboveBalance(transaction) && !this.#transactionHistory.includes(transaction))
    };

    isAboveBalance = (transaction) => {
        // If the type is withdrawal, check that the amount is less than the balance plus the account's overdraft limit, otherwise throw an error
        if (!(transaction.getType() === "withdrawal"  && (transaction.getAmount() > (this.#balance + this.#overdraftLimit)))) { return true }
        else {
            throw new Error(`You cannot remove ${transaction.getAmount().toFixed(2)} because you only have ${(this.#balance + this.#overdraftLimit).toFixed(2)} available.`)
        }
    };

    balanceChange = (amount, type) => {
        // Adjust the account balance by the given amount
        if (type === "deposit") { this.#balance += amount }
        else if (type === "withdrawal") { this.#balance -= amount }
    };
};
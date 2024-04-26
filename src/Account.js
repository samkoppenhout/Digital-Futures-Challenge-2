export default class Account {
    #balance = 0;
    #transactionHistory = [];


    getBalance = () => {
        return this.#balance;
    };

    getTransactionHistory = () => {
        return this.#transactionHistory;
    };

    addTransaction = (transaction) => {
        this.#transactionHistory.push(transaction);
        if (transaction.type = "deposit") {
            this.deposit(transaction.amount);
        } else if ((transaction.type = "withdrawal")) {
            this.withdraw(transaction.amount);
        } else { console.log("Transaction type not recognised.") };
    };

    deposit = (amount) => {
        if (Number.isInteger(amount) && amount > 0) {
            this.#balance += amount;
            console.log(`${amount.toFixed(2)} deposited to account.`)
        } else { console.log(`Amount could not be deposited. Is "${amount}" a positive integer?`); }
    };

    withdraw = (amount) => {
        if (Number.isInteger(amount) && amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`${amount.toFixed(2)} withdrawn from account.`);
            } else { console.log(`Could not withdraw. ${amount.toFixed(2)} is greater than the account balance ${this.#balance.toFixed(2)}`) };
        } else { console.log(`Amount could not be withdrawn. Is "${amount}" a positive integer?`); };
    };
};
export default class Account {
    #balance = 0;

    getBalance = () => {
        return this.#balance;
    };

    deposit = (amount) => {
        if (Number.isInteger(amount) && amount > 0) {
            this.#balance += amount;
            console.log(`${amount} added to account.`)
        } else { console.log(`Account value could not be changed. Is "${amount}" a positive integer?`); }
    };

    withdraw = (amount) => {
        this.#balance -= amount;
    };
};
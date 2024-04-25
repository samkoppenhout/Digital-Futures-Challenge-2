export default class Account {
    #balance = 0;

    getBalance = () => {
        return this.#balance;
    };
    deposit = (amount) => {
        this.#balance += amount;
    };
};
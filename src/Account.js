export default class Account {
    #balance = 0;

    getBalance = () => {
        return this.#balance;
    };
    deposit = (amount) => {
        Number.isInteger(amount) && (amount > 0) && (this.#balance += amount);
    };
};
export default class Transaction { 
    #date
    #type
    #amount
    #balanceAfterTransaction
    constructor(date, type, amount) {
        this.#date = date
        this.#type = type
        this.#amount = amount
    }
    getDate = () => {
        return this.#date;
    }
    getType = () => {
        return this.#type;
    }
    getAmount = () => {
        return this.#amount;
    }
    setBalanceAfterTransaction = (balance) => {
        this.#balanceAfterTransaction = balance;
    }
    getBalanceAfterTransaction = () => {
        return this.#balanceAfterTransaction;
    }
};
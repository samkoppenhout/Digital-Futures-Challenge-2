export default class Transaction {
    #date
    #type
    #amount
    #balanceAfterTransaction
    #valid
    constructor(date, type, amount) {
        this.#date = date
        this.#type = type
        this.#amount = amount
        this.checkIfValid()
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
    isValid = () => {
        return this.#valid
    }
    checkIfValid = () => {
        if (this.checkAmount()) { this.#valid = true }
        else { this.#valid = false }
    }
    checkAmount = () => {
        if (typeof amount === "number" && amount > 0) { return true }
        else { return false }
    }
};
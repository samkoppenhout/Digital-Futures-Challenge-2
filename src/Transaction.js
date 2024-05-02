export default class Transaction {
    
    #dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
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
        if (this.checkAmount() && this.checkType() && this.checkDate()) { this.#valid = true }
        else { this.#valid = false }
    }
    checkAmount = () => {
        if (typeof this.#amount === "number" && this.#amount > 0) { return true }
        else { return false }
    }
    checkType = () => { 
        if (this.#type === "deposit" || this.#type === "withdrawal") { return true }
        else { return false }
    }
    checkDate = () => {
        return (this.#dateRegex.test(this.#date))
    }
};
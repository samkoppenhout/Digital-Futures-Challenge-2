export default class Transaction {
    // Properties
    #dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    #date
    #type
    #amount
    #balanceAfterTransaction

    constructor(date, type, amount) {
        try {
            // Checks if the data is valid before it is added
            this.checkIfValid(date, type, amount)
            this.#date = date
            this.#type = type
            this.#amount = amount
        } catch (error) { console.error('Transaction invalid:', error.message) }
    }

    // Methods
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

    checkIfValid = (date, type, amount) => {
        // Checks each data type individually
        this.checkAmount(amount) && this.checkType(type) && this.checkDate(date)
    }

    checkAmount = (amount) => {
        // If the amount is number, greater than 0 and to no more than 2 decimal places, return true, otherwise throw an error
        if (typeof amount === "number" && amount > 0 && ((amount * 100) % 1 === 0)) { return true }
        else {
            throw new Error('Amount must be a positive number with no more than 2 decimal places.')
        }
    }
    checkType = (type) => { 
        // If the type is either deposit or withdrawal, return true, otherwise throw an error
        if (type === "deposit" || type === "withdrawal") { return true }
        else {
            throw new Error('Transaction type must be either "deposit" or "withdrawal"')
        }
    }
    checkDate = (date) => {
        // If the date is a string in the correct format using regex, return true, otherwise throw an error
        if (this.#dateRegex.test(date)) { return true } else {
            throw new Error('Transaction date must be a string in the format "DD/MM/YYYY"')
        }
    }
};
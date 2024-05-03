import Transaction from "../src/Transaction.js"

let testDate, testType, testAmount, transaction

beforeEach(() => {
    testDate = undefined;
    testType = undefined;
    testAmount = undefined;
    transaction = undefined;
})

describe("Transaction Class Tests:", () => { 
    it("should create a transaction object with the correct date value when the constructor is called", () => {
        // Arrange
        testDate = "22/02/2004"
        testType = "deposit"
        testAmount = 1
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.getDate()).toBe(testDate)
    })

    it("should create a transaction object with the correct type value when the constructor is called", () => {
        // Arrange
        testDate = "22/02/2004"
        testType = "deposit"
        testAmount = 1
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.getType()).toBe(testType)
    })

    it("should create a transaction object with the correct amount value when the constructor is called", () => {
        // Arrange
        testDate = "22/02/2004"
        testType = "deposit"
        testAmount = 1
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.getAmount()).toBe(testAmount)
    })

    it("should report valid if the arguments are as expected", () => {
        // Arrange
        testDate = "22/02/2004"
        testType = "deposit"
        testAmount = 1
        // Act
        // Assess
        expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).not.toThrowError()
    })

    it("should throw an error if the amount is negative", () => {
        // Arrange
        spyOn(console, 'error');
        testDate = "22/02/2004"
        testType = "deposit"
        testAmount = -1
        // Act
        // Assess
        expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
    })

    it("should throw an error if the amount is to more than 2 decimal places", () => {
        // Arrange
        spyOn(console, 'error');
        testDate = "22/02/2004"
        testType = "deposit"
        testAmount = 1.002
        // Act
        // Assess
        expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
    })

    it("should throw an error if the amount is not a number", () => {
        // Arrange
        spyOn(console, 'error');
        testDate = "22/02/2004"
        testType = "deposit"
        testAmount = "string"
        // Act
        // Assess
        expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
    })

    it("should throw an error if the amount is a string that is not deposit or withdrawal", () => {
        // Arrange
        spyOn(console, 'error');
        testDate = "22/02/2004";
        testType = "test";
        testAmount = 1;
        // Act
        // Assess
        expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
    })

    it("should throw an error if the type is not a string", () => {
        // Arrange
        spyOn(console, 'error');
        testDate = "22/02/2004"
        testType = null
        testAmount = 1
        // Act
        // Assess
        expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
    })

    it("should throw an error if the date is not formatted as expected", () => {
        // Arrange
        spyOn(console, 'error');
        testDate = "test";
        testType = "deposit";
        testAmount = 1;
        // Act
        // Assess
        expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError();
    });

    it("should throw an error if the date is null", () => {
        // Arrange
        spyOn(console, 'error');
        testDate = null;
        testType = "deposit";
        testAmount = 1;
        // Act
        // Assess
        expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError();
    });

    it("should not create an instance of the transaction class when the static factory  method is called with incorrect arguments", () => {
        // Arrange
        // Act
        transaction = Transaction.createTransaction(null, "deposit", 500)
        // Assess
        expect(transaction).toBe(undefined)
    });
})
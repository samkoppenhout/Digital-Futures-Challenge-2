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
        testDate = "22/02/04"
        testType = "deposit"
        testAmount = 1
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.getDate()).toBe(testDate)
    })

    it("should create a transaction object with the correct type value when the constructor is called", () => {
        // Arrange
        testDate = "22/02/04"
        testType = "deposit"
        testAmount = 1
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.getType()).toBe(testType)
    })

    it("should create a transaction object with the correct amount value when the constructor is called", () => {
        // Arrange
        testDate = "22/02/04"
        testType = "deposit"
        testAmount = 1
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.getAmount()).toBe(testAmount)
    })

    it("should report not valid if the amount is negative", () => {
        // Arrange
        testDate = "22/02/04"
        testType = "deposit"
        testAmount = -1
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.isValid()).toBe(false)
    })

    it("should report not valid if the amount is not a number", () => {
        // Arrange
        testDate = "22/02/04"
        testType = "deposit"
        testAmount = "string"
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.isValid()).toBe(false)
    })

    it("should report not valid if the amount is a string that is not deposit or withdrawal", () => {
        // Arrange
        testDate = "22/02/04";
        testType = "test";
        testAmount = 1;
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.isValid()).toBe(false)
    })

    it("should report not valid if the amount is not a string", () => {
        // Arrange
        testDate = "22/02/04"
        testType = null
        testAmount = 1
        // Act
        transaction = new Transaction(testDate, testType, testAmount)
        // Assess
        expect(transaction.isValid()).toBe(false)
    })
})
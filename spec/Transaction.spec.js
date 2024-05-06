import Transaction from "../src/Transaction.js"

let testDate, testType, testAmount, transaction

beforeEach(() => {
    testDate = undefined;
    testType = undefined;
    testAmount = undefined;
    transaction = undefined;
})

describe("Transaction Class Tests:", () => { 
    describe("Constructor Tests:", () => {
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
    });

    describe("Data Validation Tests:", () => {
        it("should not throw an error if the arguments are as expected", () => {
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
            testDate = "22/02/2004"
            testType = "deposit"
            testAmount = -1
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
        })

        it("should throw an error if the amount is zero", () => {
            // Arrange
            spyOn(console, 'error');
            testDate = "22/02/2004"
            testType = "deposit"
            testAmount = 0
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
        })

        it("should throw an error if the amount is to more than 2 decimal places", () => {
            // Arrange
            testDate = "22/02/2004"
            testType = "deposit"
            testAmount = 1.002
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
        })

        it("should throw an error if the amount is a string", () => {
            // Arrange
            testDate = "22/02/2004"
            testType = "deposit"
            testAmount = "string"
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
        })

        it("should throw an error if the amount is null", () => {
            // Arrange
            testDate = "22/02/2004"
            testType = "deposit"
            testAmount = null
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
        })

        it("should throw an error if the amount is a boolean true", () => {
            // Arrange
            testDate = "22/02/2004"
            testType = "deposit"
            testAmount = true
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
        })

        it("should throw an error if the type is a string that is not deposit or withdrawal", () => {
            // Arrange
            testDate = "22/02/2004";
            testType = "test";
            testAmount = 1;
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
        })

        it("should throw an error if the type is not a string", () => {
            // Arrange
            testDate = "22/02/2004"
            testType = null
            testAmount = 1
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError()
        })

        it("should throw an error if the date is not formatted as expected", () => {
            // Arrange
            testDate = "test";
            testType = "deposit";
            testAmount = 1;
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError();
        });

        it("should throw an error if the date is null", () => {
            // Arrange
            testDate = null;
            testType = "deposit";
            testAmount = 1;
            // Act
            // Assess
            expect(() => { transaction = new Transaction(testDate, testType, testAmount) }).toThrowError();
        });
    });

    describe("Static Factory Method Tests:", () => {
        it("should not create an instance of the transaction class when the static factory  method is called with incorrect arguments", () => {
            // Arrange
            testDate = "22/02/2004"
            testType = "deposit"
            testAmount = 1
            // Act
            transaction = Transaction.createTransaction(testDate, testType, testAmount)
            // Assess
            expect(transaction).not.toBe(undefined)
        });

        it("should not create an instance of the transaction class when the static factory  method is called with incorrect arguments", () => {
            // Arrange
            testDate = null
            testType = "deposit"
            testAmount = 1
            // Act
            transaction = Transaction.createTransaction(testDate, testType, testAmount)
            // Assess
            expect(transaction).toBe(undefined)
        });
    });
})
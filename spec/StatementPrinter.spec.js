import StatementPrinter from "../src/StatementPrinter.js"

let testTransaction,
    testDate,
    testType,
    testAmount,
    testBalanceAfterTransaction,
    expected,
    testTransactionHistory,
    testTransaction2,
    testTransaction3

beforeEach(() => {
})

afterEach(() => {
    testDate = undefined;
    testType = undefined;
    testAmount = undefined;
    testBalanceAfterTransaction = undefined;
    testTransaction = undefined;
    expected = undefined;
})

describe("Printer class tests", () => {
    it("concatenate the required fields for a single transaction into a single string that matches the goal format for a deposit", () => {
        // Arrange
        testDate = "20/02/2012";
        testType = "deposit";
        testAmount = 500;
        testBalanceAfterTransaction = 2500;
        testTransaction = jasmine.createSpyObj("test transaction", {
            getDate: testDate,
            getType: testType,
            getAmount: testAmount,
            getBalanceAfterTransaction: testBalanceAfterTransaction
        })
        expected = ("20/02/2012 || 500.00  ||         || 2500.00")
        // Act
        // Assess
        expect(StatementPrinter.concatenateTransaction(testTransaction)).toBe(expected)
    })

    it("concatenate the required fields for a single transaction into a single string that matches the goal format for a withdrawal", () => {
        // Arrange
        testDate = "20/02/2012";
        testType = "withdrawal";
        testAmount = 500;
        testBalanceAfterTransaction = 2500;
        testTransaction = jasmine.createSpyObj("test transaction", {
            getDate: testDate,
            getType: testType,
            getAmount: testAmount,
            getBalanceAfterTransaction: testBalanceAfterTransaction
        })
        expected = ("20/02/2012 ||         || 500.00  || 2500.00")
        // Act
        // Assess
        expect(StatementPrinter.concatenateTransaction(testTransaction)).toBe(expected)
    })

    it("should print the same number of lines as size of the transaction history, plus one for the header", () => {
        // Arrange
        testTransaction = jasmine.createSpyObj("test transaction", {
            getDate: "10/01/2012",
            getType: "deposit",
            getAmount: 1000,
            getBalanceAfterTransaction: 1000
        })
        testTransaction2 = jasmine.createSpyObj("test transaction", {
            getDate: "13/01/2012",
            getType: "deposit",
            getAmount: 2000,
            getBalanceAfterTransaction: 3000
        })
        testTransaction3 = jasmine.createSpyObj("test transaction", {
            getDate: "14/01/2012",
            getType: "withdrawal",
            getAmount: 500,
            getBalanceAfterTransaction: 2500
        })
        testTransactionHistory = [testTransaction, testTransaction2, testTransaction3]
        expected = testTransactionHistory.length + 1
        spyOn(console, 'log')
        // Act
        StatementPrinter.print(testTransactionHistory)
        // Assert
        expect(console.log).toHaveBeenCalledTimes(expected)
    })
})
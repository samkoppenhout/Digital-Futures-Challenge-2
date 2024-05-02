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
    it("should print four times the number of lines as size of the transaction history, plus one for the header", () => {
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
        expected = testTransactionHistory.length * 4 + 1
        spyOn(process.stdout, 'write')
        // Act
        StatementPrinter.print(testTransactionHistory)
        // Assert
        expect(process.stdout.write).toHaveBeenCalledTimes(expected)
    })
})
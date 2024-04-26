import Account from "../src/Account.js"

let account, testAmount, expected, testDeposit, testWithdrawal;

beforeEach(() => {
    account = new Account;
    testDeposit = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12",
        getType: "deposit",
        getAmount: 500,
        setBalanceAfterTransaction: () => { }
    });
    testWithdrawal = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12" ,
        getType: "withdrawal",
        getAmount: 500,
        setBalanceAfterTransaction: () => { }
    });
});
afterEach(() => {
    account = undefined;
    testAmount = undefined;
    expected = undefined;
    testDeposit = undefined;
    testWithdrawal = undefined;
});

describe("Account Deposit Tests:", () => {
    it("should initialise the balance to 0", () => {
        //Arrange
        expected = 0;
        //Act
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should add to the transaction history when a transaction is added", () => {
        //Arrange
        expected = account.getTransactionHistory().length;
        //Act
        account.addTransaction(testDeposit);
        //Assess
        expect(account.getTransactionHistory().length).toBeGreaterThan(expected);
    });

    it("should increase the balance if the transaction is type deposit", () => {
        // Arrange
        expected = account.getBalance();
        // Act
        account.addTransaction(testDeposit);
        // Assess
        expect(account.getBalance()).toBeGreaterThan(expected);
    });

    it("should decrease the balance if the transaction is type withdrawal", () => {
        // Arrange
        expected = account.getBalance();
        // Act
        account.addTransaction(testWithdrawal);
        // Assess
        expect(account.getBalance()).toBeLessThan(expected);
    });

    it("should call the setBalanceAfterTransaction function for each successful transaction", () => {
        // Arrange
        // Act
        account.addTransaction(testDeposit);
        // Assess
        expect(testDeposit.setBalanceAfterTransaction).toHaveBeenCalled();
    });
});
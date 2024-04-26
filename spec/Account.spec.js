import test from "node:test";
import Account from "../src/Account.js"
import exp from "constants";

let account, testAmount, expected, testDeposit, testWithdrawal;

beforeEach(() => {
    account = new Account;
    testAmount = undefined;
    expected = undefined;
    testDeposit = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12",
        getType: "deposit",
        getAmount: 500
    });
    testWithdrawal = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12",
        getType: "withdrawal",
        getAmount: 500
    });
});

describe("Account Deposit Tests:", () => {
    it("should initialise the balance to 0", () => {
        //Arrange
        expected = 0;
        //Act
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should increase the balance after deposit() is called", () => {
        //Arrange
        testAmount = 500;
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBeGreaterThan(expected);
    });

    it("should increase the balance by the correct amount", () => {
        //Arrange
        testAmount = 500;
        expected = account.getBalance() + testAmount;
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not increase the balance if the amount is negative", () => {
        //Arrange
        testAmount = -500
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not increase the balance if the amount is a string", () => {
        //Arrange
        testAmount = "Surprise!";
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not increase the balance if the amount is null", () => {
        //Arrange
        testAmount = null;
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not increase the balance if the amount is a boolean true", () => {
        //Arrange
        testAmount = true;
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not increase the balance if the amount is undefined", () => {
        //Arrange
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });
});

describe("Account Withdrawal Tests:", () => {
    it("should decrease the balance after deposit() is called", () => {
        //Arrange
        testAmount = 500;
        account.deposit(testAmount);
        expected = account.getBalance();
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBeLessThan(expected);
    });

    it("should decrease the balance by the correct amount", () => {
        //Arrange
        testAmount = 500;
        account.deposit(testAmount);
        expected = account.getBalance() - testAmount;
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not decrease the balance if the amount is negative", () => {
        //Arrange
        testAmount = -500
        expected = account.getBalance();
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not decrease the balance if the amount is a string", () => {
        //Arrange
        testAmount = "Surprise!";
        expected = account.getBalance();
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not decrease the balance if the amount is null", () => {
        //Arrange
        testAmount = null;
        expected = account.getBalance();
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not decrease the balance if the amount is a boolean true", () => {
        //Arrange
        testAmount = true;
        expected = account.getBalance();
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not decrease the balance if the amount is greater than the current balance", () => {
        //Arrange
        testAmount = 500;
        expected = account.getBalance();
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should decrease the balance if the amount is the same as the current balance", () => {
        //Arrange
        testAmount = 500;
        account.deposit(testAmount);
        expected = account.getBalance() - testAmount;
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });
});

describe("Add Transaction Tests:", () => {
    it("should add a transaction to transactionHistory whenever a transaction of getType 'deposit' is called", () => {
        // Arrange
        expected = account.getTransactionHistory().length + 1;
        // Act
        account.addTransaction(testDeposit);
        // Assess
        expect(account.getTransactionHistory().length).toBe(expected);
    });

    it("should add a the correct transaction to transactionHistory whenever a transaction of getType 'deposit' is called", () => {
        // Arrange
        // Act
        account.addTransaction(testDeposit);
        // Assess
        expect(account.getTransactionHistory()).toContain(testDeposit);
    });

    it("should call the deposit method whenever the transaction getType is deposit", () => {
        // Arrange
        spyOn(account, 'deposit');
        // Act
        account.addTransaction(testDeposit);
        // Assess
        expect(account.deposit).toHaveBeenCalled();
    });

    it("should add a transaction to transactionHistory whenever a transaction of getType 'withdrawal' is called", () => {
        // Arrange
        expected = account.getTransactionHistory().length + 1;
        // Act
        account.addTransaction(testWithdrawal);
        // Assess
        expect(account.getTransactionHistory().length).toBe(expected);
    });

    it("should add a the correct transaction to transactionHistory whenever a transaction of getType 'withdrawal' is called", () => {
        // Arrange
        // Act
        account.addTransaction(testWithdrawal);
        // Assess
        expect(account.getTransactionHistory()).toContain(testWithdrawal);
    });

    it("should call the withdraw method whenever the transaction getType is 'withdrawal'", () => {
        // Arrange
        spyOn(account, 'withdraw');
        // Act
        account.addTransaction(testWithdrawal);
        // Assess
        expect(account.withdraw).toHaveBeenCalled();
    });
});
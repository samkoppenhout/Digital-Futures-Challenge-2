import Account from "../src/Account.js"

let account, expected, testDeposit, testWithdrawal;

beforeEach(() => {
    account = new Account();
    testDeposit = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12",
        getType: "deposit",
        getAmount: 500,
        setBalanceAfterTransaction: () => { },
    });
    testWithdrawal = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12" ,
        getType: "withdrawal",
        getAmount: 500,
        setBalanceAfterTransaction: () => { },
    });
});

afterEach(() => {
    account = undefined;
    expected = undefined;
    testDeposit = undefined;
    testWithdrawal = undefined;
});

describe("Transaction Tests:", () => {
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
        account.addTransaction(testDeposit);
        expected = account.getBalance();
        // Act
        account.addTransaction(testWithdrawal);
        // Assess
        expect(account.getBalance()).toBeLessThan(expected);
    });

    it("should call the setBalanceAfterTransaction function after a successful transaction", () => {
        // Arrange
        // Act
        account.addTransaction(testDeposit);
        // Assess
        expect(testDeposit.setBalanceAfterTransaction).toHaveBeenCalled();
    });

    it("should not let you withdraw below the balance", () => {
        // Arrange
        // Act
        // Assess
        expect(() => {
            account.addTransaction(testWithdrawal);
        }).toThrowError()
    });

    it("should allow negative withdrawal if within the accounts overdraft", () => {
        // Arrange
        account = new Account(1000)
        expected = account.getBalance() - 500;
        // Act
        account.addTransaction(testWithdrawal);
        // Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not report any errors when tryAdd is called on an expected transaction", () => {
        expect(() => {account.tryAddTransaction(testDeposit)}).not.toThrowError()
    });
    
    it("should add a new transaction when the tryAddTransaction error catching function is called", () => {
        // Arrange
        expected = account.getTransactionHistory().length + 1;
        // Act
        account.tryAddTransaction(testDeposit);
        // Assert
        expect(account.getTransactionHistory().length).toBe(expected);
    });


    it("should print an error when tryAdd is called on a withdraw transaction which should take the account below its balance", () => {
        // Arrange
        spyOn(console, 'error');
        // Act
        account.tryAddTransaction(testWithdrawal);
        // Assert
        expect(console.error).toHaveBeenCalled();
    });

    it("should not add duplicate transactions", () => {
        // Arrange
        account.tryAddTransaction(testDeposit);
        expected = account.getTransactionHistory().length;
        // Act
        account.tryAddTransaction(testDeposit);
        // Assert
        expect(account.getTransactionHistory().length).toBe(expected);
    });

    it("should print a transaction success message when a new transaction is added", () => {
        // Arrange
        spyOn(console, 'log');
        // Act
        account.tryAddTransaction(testDeposit);
        // Assert
        expect(console.log).toHaveBeenCalled();
    });
});

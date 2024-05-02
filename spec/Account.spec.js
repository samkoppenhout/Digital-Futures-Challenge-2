import Account from "../src/Account.js"

let account, expected, testDeposit, testWithdrawal;

beforeEach(() => {
    account = new Account;
    testDeposit = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12",
        getType: "deposit",
        getAmount: 500,
        isValid: true,
        setBalanceAfterTransaction: () => { },
        getOverdraftLimit: 0
    });
    testWithdrawal = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12" ,
        getType: "withdrawal",
        getAmount: 500,
        isValid: true,
        setBalanceAfterTransaction: () => { },
        getOverdraftLimit: 0
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

    it("should not add a transaction to the transaction history if it reports not valid", () => {
        // Arrange
        testDeposit = jasmine.createSpyObj("test transaction", {
            getDate: "20/02/12",
            getType: "danger",
            getAmount: 500,
            isValid: false,
            setBalanceAfterTransaction: () => { },
            getOverdraftLimit: 0
        });
        expected = account.getTransactionHistory().length
        // Act
        account.addTransaction(testDeposit);
        // Assess
        expect(account.getTransactionHistory().length).toBe(expected);
    });

    it("should not let you withdraw below the balance", () => {
        // Arrange
        expected = account.getBalance();
        // Act
        account.addTransaction(testWithdrawal);
        // Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should allow negative withdrawal if within the accounts overdraft", () => {
    testWithdrawal = jasmine.createSpyObj("test deposit", {
        getDate: "20/02/12" ,
        getType: "withdrawal",
        getAmount: 500,
        isValid: true,
        setBalanceAfterTransaction: () => { },
        getOverdraftLimit: 1000
    });
        expected = account.getBalance() - 500;
        // Act
        account.addTransaction(testWithdrawal);
        // Assess
        expect(account.getBalance()).toBe(expected);
    })
});

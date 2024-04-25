import Account from "../src/Account.js"

let account, testAmount, expected;

beforeEach(() => {
    account = new Account;
    testAmount = undefined;
    expected = undefined;
})

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

    it("should not change the balance if the amount is negative", () => {
        //Arrange
        testAmount = -500
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not change the balance if the amount is a string", () => {
        //Arrange
        testAmount = "Surprise!";
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not change the balance if the amount is null", () => {
        //Arrange
        testAmount = null;
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not change the balance if the amount is a boolean true", () => {
        //Arrange
        testAmount = true;
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBe(expected);
    });

    it("should not change the balance if the amount is undefined", () => {
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
        expected = account.getBalance();
        //Act
        account.withdraw(testAmount);
        //Assess
        expect(account.getBalance()).toBeLessThan(expected);
    });
})
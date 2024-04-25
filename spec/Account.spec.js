import Account from "../src/Account.js"

let account, testAmount, expected;

beforeEach(() => {
    account = new Account;
    testAmount = 500;
    expected = undefined;
})

describe("Account Deposit Tests:", () => {
    it("should increase the balance after deposit() is called", () => {
        //Arrange
        expected = account.getBalance();
        //Act
        account.deposit(testAmount);
        //Assess
        expect(account.getBalance()).toBeGreaterThan(expected);
    });
});
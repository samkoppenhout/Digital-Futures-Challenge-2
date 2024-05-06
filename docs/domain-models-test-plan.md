# Domain Models and Test Plan

## Use of Agile for Project Planning

A kanban board was used to track progress on this project. A screenshot of this has been included in image-1, showing an example of a user story written out, with its domain model linked and a 'definition-of-done' included for tracking and project management purposes.

## User Stories

### Core Features

User Story 1:

- As a user,
- I should be able to deposit funds,
- So I can put money in the account.

User Story 2:

- As a user,
- I should be able to withdraw funds if I have sufficient balance,
- So I can withdraw money from the account.

User Story 3:

- As a user,
- I should be able to print an account statement,
- So I can see my balance and deposit/withdrawal history.

### Additional Features

Generative AI was used in the development of the user following user stories.

User Story 4:

- As a user,
- I want the credits and positive balances in my bank statement to appear in green text, and debits and negative balances to appear in red text,
- For easier readability.

User Story 5:

- As a user,
- I want to have an overdraft facility option for my account,
- So that I can withdraw funds even if my balance goes below zero.

User Story 6:

- As a user,
- When I attempt to withdraw funds that would result in a negative balance, I want the withdrawal to be allowed only up to the value of my configured overdraft limit,
- So that I do not over spend

## Domain Models

The domain models used for the core features can be seen in "image-2". The domain models for the additional features are available in "image-3", and were constructed with the help of generative AI.

## Testing

Jasmine was used to test this application as it was being developed. Below is a full list of the tests, grouped by class.

### Transaction Class Tests:

Constructor Tests:

- It should create a transaction object with the correct date value when the constructor is called.
- It should create a transaction object with the correct type value when the constructor is called.
- It should create a transaction object with the correct amount value when the constructor is called.

Data Validation Tests:

- It should not throw an error if the arguments are as expected.
- It should throw an error if the amount is negative.
- It should throw an error if the amount is zero.
- It should throw an error if the amount is to more than 2 decimal places.
- It should throw an error if the amount is a string.
- It should throw an error if the amount is null.
- It should throw an error if the amount is a boolean true.
- It should throw an error if the type is a string that is not deposit or withdrawal.
- It should throw an error if the type is not a string.
- It should throw an error if the date is not formatted as expected.
- It should throw an error if the date is null.

Static Factory Method Tests:

- It should create an instance of the transaction class when the static factory method is called with correct arguments.
- It should not create an instance of the transaction class when the static factory method is called with incorrect arguments.

### Account Class Tests:

Account Balance Tests:

- It should initialise the balance to 0.
- It should increase the balance if the transaction is type deposit.
- It should increase the balance by the correct amount if the transaction is type deposit.
- It should decrease the balance if the transaction is type withdrawal.
- It should increase the balance by the correct amount if the transaction is type withdrawal.
- It should not let you withdraw below the balance below zero.

Transaction History Tests:

- It should call the setBalanceAfterTransaction function after a successful transaction.
- It should add to the transaction history when a transaction is added.
- It should not add duplicate transactions.

Error Catching Function Tests:

- It should not report any errors when tryAdd is called on an expected transaction.
- It should add a new transaction when the tryAddTransaction error catching function is called.
- It should not add a transaction when the tryAddTransaction function is called on an undefined transaction.
- It should print an error when tryAdd is called on a withdraw transaction which should take the account below its balance.
- It should print a transaction success message when a new transaction is added.

Overdraft Tests:

- It should allow negative withdrawal if within the accounts overdraft.
- It should not allow negative withdrawal if below the accounts overdraft.
- It should allow negative withdrawal if amount is exactly the overdraft limit.

### Printer class tests:

As the output for the printer was visual, the formatting and colours of this class was tested manually.

- It should print four times the number of lines as size of the transaction history, plus one for the header.

# Images

| Image Name | File Path                 | Description                                                   |
| ---------- | ------------------------- | ------------------------------------------------------------- |
| image-1    | ./docs/images/image-1.png | A screenshot of the kanban used to track project progress     |
| image-2    | ./docs/images/image-2.png | A screenshot of the domain models for the core features       |
| image-3    | ./docs/images/image-3.png | A screenshot of the domain models for the additional features |

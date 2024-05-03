import Account from "./src/Account.js";
import Transaction from './src/Transaction.js';
import Printer from "./src/StatementPrinter.js"

console.log("\x1b[34m%s\x1b[0m", "The following program is an example of usual operations.")
console.log("\x1b[34m%s\x1b[0m", "Any text in blue is purely for the demonstration and would not normally be seen.")
console.log("\x1b[34m%s\x1b[0m", "Any text in red or green is part of usual functionality.")
console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "The following transactions are for an account with no overdraft.")
console.log("\x1b[34m%s\x1b[0m", "==========")

let transaction;
let account = new Account();

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to deposit 500 on 01/01/2022")
transaction = Transaction.createTransaction("01/01/2022", "deposit", 500);
account.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to deposit 25 on 05/01/2022")
transaction = Transaction.createTransaction("05/01/2022", "deposit", 25);
account.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to deposit 5.001 on 10/01/2022")
transaction = Transaction.createTransaction("10/01/2022", "deposit", 5.001);
account.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to add a transaction with the deposit/withdrawal type formatted incorrectly")
transaction = Transaction.createTransaction("10/01/2022", null, 5);
account.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to deposit with the date formatted as dd/mm/yy instead of dd/mm/yyyy")
transaction = Transaction.createTransaction("10/01/22", "deposit", 5);
account.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to withdraw 1000 on 15/01/2022")
transaction = Transaction.createTransaction("15/01/2022", "withdrawal", 1000);
account.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to deposit 20 on 20/01/2022")
transaction = Transaction.createTransaction("20/01/2022", "deposit", 20);
account.tryAddTransaction(transaction);
account.tryAddTransaction(transaction);
account.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to withdraw 50 on 22/01/2022")
transaction = Transaction.createTransaction("22/01/2022", "withdrawal", 50);
account.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Below is a sample statement for these transactions:")
Printer.print(account.getTransactionHistory());

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "The following transactions are for an account with an overdraft of 1000.")
let overdraftAccount = new Account(1000);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to deposit 500 on 01/01/2022")
transaction = Transaction.createTransaction("01/01/2022", "deposit", 500);
overdraftAccount.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to deposit 25 on 05/01/2022")
transaction = Transaction.createTransaction("05/01/2022", "deposit", 25);
overdraftAccount.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to withdraw 1000 on 15/01/2022")
transaction = Transaction.createTransaction("15/01/2022", "withdrawal", 1000);
overdraftAccount.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to deposit 20 on 20/01/2022")
transaction = Transaction.createTransaction("20/01/2022", "deposit", 20);
overdraftAccount.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Attempt to withdraw 50 on 22/01/2022")
transaction = Transaction.createTransaction("22/01/2022", "withdrawal", 50);
overdraftAccount.tryAddTransaction(transaction);

console.log("\x1b[34m%s\x1b[0m", "==========")
console.log("\x1b[34m%s\x1b[0m", "Below is a sample statement for these transactions:")
Printer.print(overdraftAccount.getTransactionHistory());


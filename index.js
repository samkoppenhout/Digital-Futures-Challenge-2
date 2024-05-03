import Account from "./src/Account.js";
import Transaction from './src/Transaction.js';
import Printer from "./src/StatementPrinter.js"

let account = new Account(1000);
let transaction;

transaction = new Transaction("01/01/2022", "deposit", 500);
account.tryAddTransaction(transaction);

transaction = new Transaction("05/01/2022", "deposit", 25);
account.tryAddTransaction(transaction);

transaction = new Transaction("10/01/2022", null, 5);
account.tryAddTransaction(transaction);

transaction = new Transaction("15/01/2022", "withdrawal", 1000);
account.tryAddTransaction(transaction);

transaction = new Transaction("20/01/2022", "deposit", 20);
account.tryAddTransaction(transaction);
account.tryAddTransaction(transaction);
account.tryAddTransaction(transaction);

transaction = new Transaction("22/01/2022", "withdrawal", 50);
account.tryAddTransaction(transaction);

Printer.print(account.getTransactionHistory());
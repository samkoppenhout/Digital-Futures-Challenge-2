import Account from "./src/Account.js";
import Transaction from './src/Transaction.js';
import Printer from "./src/StatementPrinter.js"

let transaction;
let account = new Account(0);

transaction = Transaction.createTransaction("01/01/2022", "deposit", 500);
account.tryAddTransaction(transaction);

transaction = Transaction.createTransaction("05/01/2022", "deposit", 25);
account.tryAddTransaction(transaction);

transaction = Transaction.createTransaction("10/01/2022", null, 5);
account.tryAddTransaction(transaction);

transaction = Transaction.createTransaction("15/01/2022", "withdrawal", 1000);
account.tryAddTransaction(transaction);

transaction = Transaction.createTransaction("20/01/2022", "deposit", 20);
account.tryAddTransaction(transaction);
account.tryAddTransaction(transaction);
account.tryAddTransaction(transaction);

transaction = Transaction.createTransaction("22/01/2022", "withdrawal", 50);
account.tryAddTransaction(transaction);

Printer.print(account.getTransactionHistory());


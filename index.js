import Account from "./src/Account.js";
import Transaction from './src/Transaction.js';
import Printer from "./src/StatementPrinter.js"

let account = new Account;
let transaction1 = new Transaction("22/01/2022", "deposit", 500);
let transaction2 = new Transaction("22/01/2022", "deposit", 25);
let transaction3 = new Transaction("22/01/2022", "deposit", 5);
let transaction4 = new Transaction("22/01/2022", "withdrawal", 1000);
let transaction5 = new Transaction("22/01/2022", "deposit", 20);
let transaction6 = new Transaction("22/01/2022", "withdrawal", 50);
let printer = new Printer;


account.addTransaction(transaction1);
account.addTransaction(transaction2);
account.addTransaction(transaction3);
account.addTransaction(transaction4);
account.addTransaction(transaction5);
account.addTransaction(transaction6);

account.getTransactionHistory().forEach(transaction => {console.log(printer.concatenateTransaction(transaction))})
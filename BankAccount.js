
let balance = 5000;
let transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];

function getBalance() {
    return balance;
}

function deposit(amount) {


    if (amount <= 0) {
        console.log("Invalid deposit amount.");
        return;
    }

    balance += amount;
    transactionHistory[transactionHistory.length] = `Deposited ${amount} into Savings Account`;
}

function withdraw(amount) {

    if (amount <= 0) {
        console.log("Invalid withdrawal amount.");
        return;
    }

    if (amount > balance) {
        console.log("Insufficient funds.");
        return;
    }

    balance -= amount;
    transactionHistory[transactionHistory.length] = `Withdrawn ${amount} from Savings Account`;
}

function getTransactionHistory() {

    let history = "Transaction History\n";
    for (let i = 0; i < transactionHistory.length; i++) {
        history += `${i + 1}) ${transactionHistory[i]}\n`;
    }
    return history.trim(); 
}

console.log(getBalance());

deposit(4000);
console.log(getBalance());

withdraw(3000);
console.log(getBalance());

console.log(getTransactionHistory());

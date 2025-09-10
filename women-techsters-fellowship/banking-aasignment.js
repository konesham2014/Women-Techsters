//creating 3 accounts

let account1 = { 
      name: "Senait", 
      balance: 500, 
      currency: "USD" 
  };

let account2 = { 
      name: "Mikiyas", 
      balance: 200, 
      currency: "USD" 
};
let account3 = { 
      name: "Hildana", 
      balance: 1000, 
      currency: "USD" 
};

//deposit to account1

let depositAmount = 300;
account1.balance = account1.balance + depositAmount;
console.log(account1.name + " deposited " + depositAmount + ". New balance: " + account1.balance);

//withdraw fron account2
let withdrawAmount = 250;
if (account2.balance >= withdrawAmount) {
  account2.balance = account2.balance - withdrawAmount;
  console.log(account2.name + " withdrew " + withdrawAmount + ". New balance: " + account2.balance);
} else {
  console.log("Insufficient funds for withdrawal");
}

//transfering from account3 to account1
let transferAmount = 400;
if (account3.balance >= transferAmount) {
  account3.balance = account3.balance - transferAmount;
  account1.balance = account1.balance + transferAmount;
  console.log("Transferred " + transferAmount + " from " + account3.name + " to " + account1.name);
} else {
  console.log("Transfer failed");
}

//comparing the balances
if (account1.balance > account2.balance && account1.balance > account3.balance) {
  console.log(account1.name + " has the highest balance");
} else if (account2.balance > account1.balance && account2.balance > account3.balance) {
  console.log(account2.name + " has the highest balance");
} else if (account3.balance > account1.balance && account3.balance > account2.balance) {
  console.log(account3.name + " has the highest balance");
} else {
  console.log("Two accounts are equal");
}

//checking the account
if (account1.balance > 0) {
  console.log(account1.name + "'s account is Active");
} else if (account1.balance === 0) {
  console.log(account1.name + "'s account is Empty");
} else {
  console.log(account1.name + "'s account is Overdrawn");
}

if (account2.balance > 0) {
  console.log(account2.name + "'s account is Active");
} else if (account2.balance === 0) {
  console.log(account2.name + "'s account is Empty");
} else {
  console.log(account2.name + "'s account is Overdrawn");
}

if (account3.balance > 0) {
  console.log(account3.name + "'s account is Active");
} else if (account3.balance === 0) {
  console.log(account3.name + "'s account is Empty");
} else {
  console.log(account3.name + "'s account is Overdrawn");
}


// Adding account4
let account4 = { name: "Feven", balance: 50, currency: "USD" };

//balances before transfer
console.log("\nBalances before richest-to-poorest transfer:");
console.log(account1, account2, account3, account4);

//richest and poorest accounts
let richest = account1;
if (account2.balance > richest.balance) {
  richest = account2;
}
if (account3.balance > richest.balance) {
  richest = account3;
}
if (account4.balance > richest.balance) {
  richest = account4;
}

let poorest = account1;
if (account2.balance < poorest.balance) {
  poorest = account2;
}
if (account3.balance < poorest.balance) {
  poorest = account3;
}
if (account4.balance < poorest.balance) {
  poorest = account4;
}

// transfering money from richest to poorest
let richTransferAmount = 200;
if (richest.balance >= richTransferAmount) {
  richest.balance = richest.balance - richTransferAmount;
  poorest.balance = poorest.balance + richTransferAmount;
  console.log("Transferred " + richTransferAmount + " from " + richest.name + " to " + poorest.name);
} else {
  console.log("Transfer failed");
}

//balances after transfer
console.log("\nBalances after richest-to-poorest transfer:");
console.log(account1, account2, account3, account4);

const accounts = [
  {
    name: 1,
    balance: 0,
  },
  {
    name: 2,
    balance: 0,
  },
  {
    name: 3,
    balance: 0,
  },
  {
    name: 4,
    balance: 0,
  },
  {
    name: 5,
    balance: 0,
  },
  {
    name: 6,
    balance: 0,
  },
];

function deposit(accountName, amount) {
  for (let i in accounts) {
    if (accountName === accounts[i].name) {
      accounts[i].balance += amount;
      break;
    }
  }
}
function withdraw(accountName, amount) {
  debugger;
  for (let i in accounts) {
    if (accountName === accounts[i].name) {
      if (accounts[i].balance >= amount) {
        accounts[i].balance -= amount;
      } else {
        alert("Insufficient funds in account");
      }
      break;
    }
  }
}
function getBalance(accountName) {
  for (let i in accounts) {
    if (accountName === accounts[i].name) {
      return accounts[i].balance;
    }
  }
}

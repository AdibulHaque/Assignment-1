    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`
      Account Number: ${this.accountNumber}
      Owner Name: ${this.ownerName}
      Balance: $${this.balance}`);
  }
}

// Creating two instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 2000);
const account2 = new BankAccount(1002, "Adibul Haque", 750);
const account3 = new BankAccount(1003, "Sajed Rahman", 430);

// Demonstrating functionality
account1.deposit(200);
account1.withdraw(300);
account1.displayAccountInfo();

account2.deposit(1000);
account2.withdraw(700);
account2.displayAccountInfo();

account3.deposit(660);
account3.withdraw(700);
account3.displayAccountInfo();

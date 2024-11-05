class Account {
  #blance; //private field,meaning it cannot be accessed or modified directly outside the Account class.
  constructor(initialBalance) {
    if (initialBalance <= 0) {
      throw new Error("Balance should be more than -1");
    }
    this.#blance = initialBalance;
  }
  deposite(amount) {
    if (amount < 1) {
      throw new Error("Deposite amount should be greater than zero");
    }
    this.#blance += amount;
    console.log(
      `${amount} credited to account, updated balance is ${this.#blance}`
    );
  }
  withdraw(amount) {
    if (amount > this.#blance) {
      throw new Error("Insufficient Balance");
    }
    if (amount < 0) {
      throw new Error("amount shoud be greater than 0");
    }
    this.#blance -= amount;
    console.log(
      `${amount} debited from account, updated balance is ${this.#blance}`
    );
  }

  getBalance() {
    return this.#blance;
  }
}

const account = new Account(500);

account.deposite(4500);
account.withdraw(3000);

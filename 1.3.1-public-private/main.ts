import BankAccount from "./bank-account.js"


const account1 = new BankAccount("Alice", 500)

account1.accountHolder = "Charlie"
account1.deposit(200)
account1.withdraw(150)
const account1Balance = account1.getBalance()
console.log(account1Balance)
account1.deposit(-100)
account1.showInfo()





















// const account2 = new BankAccount("Tom", 990)


// account2.deposit(10)
// account2.withdraw(-250)
// account2.withdraw(1500)
// const account2Balance = account2.getBalance()
// console.log(account2Balance)
// account2.withdraw(940)
// account2.showInfo()


// account1.showInfo()
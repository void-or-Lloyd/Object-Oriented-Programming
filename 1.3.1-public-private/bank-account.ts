export default class BankAccount {
    accountHolder: string
    private balance: number

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amount: number): void {
        if (amount > 0) this.balance += amount
        else console.log("You can't deposit a negative amount!")
    }

    withdraw(amount: number): void {
        if (amount > 0) {
            if (amount < this.balance || amount == this.balance) this.balance -= amount 
            else console.log("You can't withdraw more than your current balance!")
        }
        else console.log("Your can't withdraw a negative amount!")
    }

    getBalance(): number {return this.balance}

    showInfo(): void {
        console.log("__________________________")
        console.log("Account holder: " + this.accountHolder)
        console.log("Balance: " + this.balance + " €", `\n`)
    }
}
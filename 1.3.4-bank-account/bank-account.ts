export default class BankAccount {
    private _accountHolder: string
    private _balance: number

    constructor(accountHolder: string, balance: number) {
        this._accountHolder = accountHolder
        this._balance = balance
    }
    
    get balance(): number {return this._balance}
    

    deposit(amount: number): void {
        if (amount > 0) this._balance += amount
        else console.log("You can't deposit a negative amount!")
    }
    
    withdraw(amount: number): void {
        if (amount > 0) {
            if (amount < this._balance || amount == this._balance) this._balance -= amount 
            else console.log("You can't withdraw more than your current balance!")
        }
        else console.log("Your can't withdraw a negative amount!")
    }
}







// getBalance(): number {return this.balance}

// showInfo(): void {
//     console.log("__________________________")
//     console.log("Account holder: " + this.accountHolder)
//     console.log("Balance: " + this.balance + " €", `\n`)
// }
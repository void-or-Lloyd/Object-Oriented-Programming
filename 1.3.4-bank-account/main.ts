import { createInterface } from "node:readline/promises"
import BankAccount from "./bank-account.js"

async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    const accountHolder = await rl.question("What's your name? ")
    const startingBalance = await rl.question("Starting balance: ")
    const account1 = new BankAccount(accountHolder, Number(startingBalance))
    console.log("____________________________")
    console.log("Welcome " + accountHolder + "!")
    let exit = false
    
    // Break
    
    while (exit == false) {
        console.log(" ") // Spacer
        console.log("--- Bank Account ---")
        console.log("1. Show balance")
        console.log("2. Deposit money")
        console.log("3. Withdraw money")
        console.log("4. Exit")

        const action = await rl.question("Choose an option: ")
        const actionAnswer = action.toLowerCase()

        if (Number(action) == 1 || actionAnswer == "show balance" || actionAnswer == "balance") console.log(account1.balance)
        if (Number(action) == 2 || actionAnswer == "deposit money" || actionAnswer == "deposit") {
            const deposit = await rl.question("Amount to deposit: ")
            account1.deposit(Number(deposit))
        }
        if (Number(action) == 3 || actionAnswer == "withdraw money" || actionAnswer == "withdraw") {
            const withdraw = await rl.question("Amount to withdraw: ")
            account1.withdraw(Number(withdraw))
        }
        if (Number(action) == 4 || actionAnswer == "exit") exit = true
    }

    rl.close()
}

main()
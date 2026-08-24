class Player {
    name: string
    health: number
    score: number

    constructor(name:string) {
        this.name = name
        this.health = 100
        this.score = 0
    }

    takeDamage(amount: number): void {this.health = this.health - amount}

    heal(amount: number): void {this.health = this.health + amount}

    addScore(amount: number): void {this.score = this.score + amount}

    showInfo() {
        console.log("Player: " + this.name)
        console.log("Health: " + this.health)
        console.log("Score: " + this.score)
    }
}

const player1 = new Player("Alex")
const player2 = new Player("Emma")

player1.takeDamage(30)
player1.addScore(100)
player1.heal(10)
player1.takeDamage(25)
player1.addScore(50)


player2.takeDamage(43)
player2.addScore(70)
player2.heal(12)
player2.addScore(40)


console.log("_________________")
player1.showInfo()
console.log("_________________")
player2.showInfo()
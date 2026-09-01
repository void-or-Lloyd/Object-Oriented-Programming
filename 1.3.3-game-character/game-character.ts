export default class GameCharacter {
    private _name: string
    private _health: number
    private _maxHealth: number

    constructor(name: string, health: number) {
        this._name = name
        this._health = health
        this._maxHealth = health
    }

    get name(): string {return this._name}
    get health(): number {return this._health}
    get maxHealth(): number {return this._maxHealth}

    takeDamage(amount: number): void {
        if (amount <= 0) return console.log("0 damage??? How???")
        if (amount >= this._health) this._health = 0
        else this._health -= amount
    }
    
// Break

    heal(amount: number): void {
        if (amount <= 0) return console.log("What was the point of healing IF IT RESTORES 0 F***ING HEALTH?!")
        if (amount >= this._maxHealth) this._health = this._maxHealth
        else this._health += amount
    }

    isAlive(): boolean {
        if (this._health > 0) return true
        else return false
    }

    showInfo(): void {
        console.log("___________________________")
        console.log("Character: " + this._name)
        console.log("Health: " + this._health + " / " + this._maxHealth ,'\n', '\n')
    }
}
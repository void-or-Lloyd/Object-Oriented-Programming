import type Player from "./player.js"

export default class Team {
    private _name: string
    private _players: Player[] = []

    constructor (name: string) { this._name = name }

    addPlayer(player: Player): void { this._players.push(player) }

    showPlayers(): void {
        console.log("--- Players in " + this._name + " ---")
        for (const player of this._players) {
            console.log(player.number + " - " + player.name + " - " + player.position)
        }
    }

    getPlayerCount(): number {return this._players.length}

    findPlayer(number: number): Player | undefined {
        for (const player of this._players) if (number == player.number) return player
        return undefined
    }
}
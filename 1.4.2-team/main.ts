import Player from "./player.js"
import Team from "./team.js"

// const examplayer = new Player(name, number, position)
// const exampleam = new Team(name)

const teamTigers = new Team("Tigers")

const player10 = new Player("Alex", 10, "Forward")
const player7 = new Player("Sam", 7, "Midfielder")
const player1 = new Player("Robin", 1, "Goalkeeper")

teamTigers.addPlayer(player10)
teamTigers.addPlayer(player7)
teamTigers.addPlayer(player1)


teamTigers.showPlayers()
console.log(teamTigers.getPlayerCount())

console.log(teamTigers.findPlayer(6))
console.log(teamTigers.findPlayer(7))
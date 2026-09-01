import GameCharacter from "./game-character.js"
// const exampleter1 = new GameCharacter(name, starting- & max health)
const character1 = new GameCharacter("Arin", 100)
const character2 = new GameCharacter("Void", 75)


console.log(character1.health)
if (character1.isAlive()) console.log("The character is alive.")
else console.log("The character has been defeated.")
// character1.health = 9999
// character1._health = -500
character1.takeDamage(-20)
character1.takeDamage(40)
character1.heal(20)
character1.heal(0)
character1.showInfo()


character2.takeDamage(45)
character2.takeDamage(15)
if (character2.isAlive()) console.log("I'm okay!")
else console.log("Ow, not so okay!")
character2.heal(-10)
character2.heal(20)
character2.showInfo()


// character1.takeDamage(-1500)
// character1.heal(0)
// character1.showInfo()
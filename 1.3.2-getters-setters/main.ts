import Thermostat from "./thermostat.js"
// const examplestat1 = new Theromstat(temperature, minimum temp, maximum temp)
const thermostat1 = new Thermostat(20, 10, 30)
const thermostat2 = new Thermostat(37, 0, 100)


console.log("________________________________________________")
console.log("Current temperature: " + thermostat1.temperature )
console.log("Minimum temperature: " + thermostat1.minTemperature)  
console.log("Maximum temperature: " + thermostat1.maxTemperature)

console.log("________________________________________________")
thermostat1.temperature = 24
console.log("New temperature: " + thermostat1.temperature)

thermostat1.temperature = 5
thermostat1.temperature = 40
// thermostat1.minTemperature = 0
console.log("------------------------------------------------")

console.log("________________________________________________")
console.log("Current temperature: " + thermostat2.temperature )
console.log("Minimum temperature: " + thermostat2.minTemperature)  
console.log("Maximum temperature: " + thermostat2.maxTemperature)

console.log("________________________________________________")
thermostat2.temperature = 46
console.log("New temperature: " + thermostat2.temperature)

thermostat2.temperature = 101
thermostat2.temperature = -10
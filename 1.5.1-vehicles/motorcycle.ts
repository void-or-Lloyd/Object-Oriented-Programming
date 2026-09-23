import Vehicle from "./vehicle.js"

export default class Motorcycle extends Vehicle {
    wheelie(): void {
        console.log("The " + this.brand + " " + this.model + " is popping a wheelie!")
    }
}
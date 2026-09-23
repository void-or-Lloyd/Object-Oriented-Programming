import Vehicle from "./vehicle.js"

export default class Car extends Vehicle {
    honk(): void {
        console.log("The " + this.brand + " " + this.model + " is honking")
    }
}
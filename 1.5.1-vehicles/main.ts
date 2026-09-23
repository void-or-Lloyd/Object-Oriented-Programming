import Car from "./car.js"
import Motorcycle from "./motorcycle.js"

const car = new Car("Toyota", "Corolla")
const motorcycle = new Motorcycle("Yamaha", "MT-07")

car.start()
car.honk()
console.log(" ")
motorcycle.start()
motorcycle.wheelie()
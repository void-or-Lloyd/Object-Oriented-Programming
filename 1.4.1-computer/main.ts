import Processor from "./processor.js"
import Computer from "./computer.js"

// const examplecu = new Processor(model, cores, speed)
// const exampleter = new Computer(brand, model, cpu/processor)

const cpu1 = new Processor("AMD Ryzen 7 250", 8, 5.1)
const computer1 = new Computer("Lenovo", "ThinkPad", cpu1)
computer1.showInfo()

const cpu2 = new Processor("Intel Core Ultra 270HX", 20, 5.3)
const computer2 = new Computer("Alienware (Dell)", "16X Aurora Gaming Laptop", cpu2)
computer2.showInfo()

const cpu3 = new Processor("AMD Ryzen 3 5425U", 4, 4.1)
const computer3 = new Computer("HP", "245 14 inch G9 Notebook", cpu3)
computer3.showInfo()
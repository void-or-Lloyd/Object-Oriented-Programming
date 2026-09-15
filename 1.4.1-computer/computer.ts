import type Processor from "./processor.js"

export default class Computer {
    private _brand: string
    private _model: string
    private _processor: Processor

    constructor (brand: string, model: string, processor: Processor) {
        this._brand = brand
        this._model = model
        this._processor = processor
    }

    showInfo(): void {
        console.log(" ")
        console.log("Model: " + this._brand + " " + this._model)
        console.log("Processor: " + this._processor.model)
        console.log("Cores: " + this._processor.cores)
        console.log("Speed: " + this._processor.speed + " GHz")
    }
}
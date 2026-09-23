export default class Vehicle {
    private _brand: string
    private _model: string

    constructor(brand: string, model: string) {
        this._brand = brand
        this._model = model
    }

    get brand(): string {return this._brand}
    get model(): string {return this._model}

    start(): void {
        console.log("The " + this._brand + " " + this._model + " is starting")
    }
}
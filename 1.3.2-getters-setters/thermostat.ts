export default class Thermostat {
    private _temperature: number
    private _minTemperature: number
    private _maxTemperature: number

    constructor(temp: number, minTemp: number, maxTemp: number) {
        this._temperature = temp
        this._minTemperature = minTemp
        this._maxTemperature = maxTemp
    }

    get temperature(): number {return this._temperature}
    get minTemperature(): number {return this._minTemperature}
    get maxTemperature(): number {return this._maxTemperature}
    

    set temperature(newTemp: number) {
        if (newTemp < this._minTemperature) {
            console.log("________________________________________________")
            console.log("You can't go below minimum temperature!")
            console.log("minimum temperature: " + this._minTemperature + " Celsius")
        }
        else if (newTemp > this._maxTemperature) {
            console.log("________________________________________________")
            console.log("You can't go above max temperature!")
            console.log("max temperature: " + this._maxTemperature + " Celsius")
        }
        else this._temperature = newTemp
    }
}
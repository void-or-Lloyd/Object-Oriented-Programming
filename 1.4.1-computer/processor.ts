export default class Processor {
    private _model: string
    private _cores: number
    private _speed: number

    constructor (model: string, cores: number, speed: number) {
        this._model = model
        this._cores = cores
        this._speed = speed
    }

    get model(): string {return this._model}
    get cores(): number {return this._cores}
    get speed(): number {return this._speed}
}
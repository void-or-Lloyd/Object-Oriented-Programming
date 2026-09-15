export default class Player {
    private _name: string
    private _number: number
    private _position: string

    constructor (name: string, number: number, position: string) {
        this._name = name
        this._number = number
        this._position = position
    }

    get name(): string {return this._name}
    get number(): number {return this._number}
    get position(): string {return this._position}
}
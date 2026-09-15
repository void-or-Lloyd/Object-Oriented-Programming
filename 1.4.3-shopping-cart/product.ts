export default class Product {
    private _name: string | undefined
    private _price: number | undefined

    constructor(name: string, price: number) {
        if (name == "") {
            console.error("A product cannot be nameless!")
            return
        }
        else this._name = name

        if (price == 0) console.error("Free?! ...Are you sure?")
        else if (price <= 0) {
            this._price = undefined
            console.error("Price cannot be negative!")
        } 
        else this._price = price
    }

    get name(): string | undefined {return this._name}
    get price(): number | undefined {return this._price}


    isValid(): boolean {
        if (this._name == "" || this._price == undefined) {
            console.error("Product not available!")
            return false
        }
        else return true
    }
}
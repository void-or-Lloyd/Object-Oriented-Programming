import ShoppingCart from "./shopping-cart.js"

export default class Customer {
    private _name: string
    shoppingCart: ShoppingCart

    constructor(name: string) {
        this._name = name
        this.shoppingCart = new ShoppingCart
    }

}
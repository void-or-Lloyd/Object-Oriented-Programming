import Product from "./product.js"

export default class ShoppingCart {
    private _products: Product[] = []


    addProduct(product: Product): void {
        if (!product.isValid()) return
        this._products.push(product)
    } 

    removeProduct(name: string): void {
        for (let i = this._products.length; i > 0; i--) {
            let mi = i - 1
            if (this._products[mi]!.name == name) this._products.splice(mi, 1)
        }
    }

    showProducts(): void {
        console.log("--- Shopping Cart ---")
        for (const product of this._products) console.log(product.name + " - " + product.price + " €")
    }

    getTotalPrice(): number {
        let totalPrice: number = 0
        for (const product of this._products) totalPrice += product.price!
        return totalPrice
    }
}




// const item = this._products.findIndex(itemName => Product.name == name)
// console.log(item)
// this._products.splice(item, 1)
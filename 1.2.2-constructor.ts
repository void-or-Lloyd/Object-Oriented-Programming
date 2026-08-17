class Product {
    name: string = ""
    price: number = 0
    stockQuantity: number = 0
    inStock: boolean = false

    constructor(name: string, price: number, stockQuantity: number, inStock: boolean) {
        this.name = name
        this.price = price
        this.stockQuantity = stockQuantity
        this.inStock = inStock
    }
}
// "Expected 4 arguements, but got 1" if you only give one arguement

const product1 = new Product("G512 Carbon", 129.90, 128, true)

const product2 = new Product("27-inch, OLED+ Super Deluxe Ultra, 1ms, 4K, AI assist (cheats), LIMITED EDITION", 999.90, 100, true)

const product3 = new Product("Actually good 32gb ddr5 kit (no RGB)", 519.90, 0, false)


console.log(product1, '\n', product2, '\n', product3)
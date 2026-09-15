import Product from "./product.js"
import Customer from "./customer.js"

const customer1 = new Customer("Tom")

const mousepad = new Product("Mousepad", 9.25)
const keyboard = new Product("Keyboard", 79.45)
const monitor = new Product("Monitor", 300.15)
const ram = new Product("32Gb ram", 609.99)
const gum = new Product("Chewing gum", 0.20)
const totallyRealNotFake = new Product("", -10.67)

customer1.shoppingCart.addProduct(mousepad)
customer1.shoppingCart.addProduct(keyboard)
customer1.shoppingCart.addProduct(monitor)
customer1.shoppingCart.addProduct(ram)
customer1.shoppingCart.addProduct(gum)
customer1.shoppingCart.addProduct(totallyRealNotFake)

customer1.shoppingCart.showProducts()
console.log("Total: " + customer1.shoppingCart.getTotalPrice().toFixed(2) + " €")

console.log(" ") //spacer

customer1.shoppingCart.removeProduct("32Gb ram")

customer1.shoppingCart.showProducts()
console.log("Total: " + customer1.shoppingCart.getTotalPrice().toFixed(2) + " €")



// shoppingCart1.addProduct(mousepad)
// shoppingCart1.addProduct(keyboard)
// shoppingCart1.addProduct(monitor)
// shoppingCart1.addProduct(ram)

// shoppingCart1.showProducts()
// console.log(shoppingCart1.getTotalPrice().toFixed(2))

// shoppingCart1.removeProduct("32Gb ram")
// shoppingCart1.showProducts()
// console.log(shoppingCart1.getTotalPrice().toFixed(2))
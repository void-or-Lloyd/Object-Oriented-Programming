class Product {
    name: string = ""
    price: number = 0
    stockQuantity: number = 0
    inStock: boolean = false
}


const tangentbord = new Product()
tangentbord.name = "Tangentbord"
tangentbord.price = 49.90
tangentbord.stockQuantity = 12
tangentbord.inStock = true

const bildskärm = new Product()
bildskärm.name = "Bildskärm"
bildskärm.price = 249.90
bildskärm.stockQuantity = 4
bildskärm.inStock = true

const webbkamera = new Product()
webbkamera.name = "Webbkamera"
webbkamera.price = 79.90
webbkamera.stockQuantity = 0
webbkamera.inStock = false


console.log(
    tangentbord, `\n`, 
    bildskärm, `\n`, 
    webbkamera
)
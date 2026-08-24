class Rectangle {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    calculateArea(): number {return this.width * this.height;}
    calculatePerimiter(): number {return this.width * 2 + this.height * 2}
}

const rectangle1 = new Rectangle(10, 5)
const rectangle2 = new Rectangle(4, 3)
const rectangle3 = new Rectangle(2, 4)

console.log(
    "Rectangle 1",`\n`,
    "Width:", rectangle1.width,`\n`,
    "Height:", rectangle1.height,`\n`,
    "Area:", rectangle1.calculateArea(),`\n`,
    "Perimeter:", rectangle1.calculatePerimiter()
)
console.log(
    "Rectangle 2",`\n`,
    "Width:", rectangle2.width,`\n`,
    "Height:", rectangle2.height,`\n`,
    "Area:", rectangle2.calculateArea(),`\n`,
    "Perimeter:", rectangle2.calculatePerimiter()
)
console.log(
    "Rectangle 3",`\n`,
    "Width:", rectangle3.width,`\n`,
    "Height:", rectangle3.height,`\n`,
    "Area:", rectangle3.calculateArea(),`\n`,
    "Perimeter:", rectangle3.calculatePerimiter()
)

// const rectangle1Area = rectangle1.calculateArea()
// const rectangle1Peri = rectangle1.calculatePerimiter()
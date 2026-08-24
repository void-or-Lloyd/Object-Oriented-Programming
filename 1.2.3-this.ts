class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const person1 = new Person("Alice", 25)
const person2 = new Person("Bob", 42)
const person3 = new Person('Amelia', 62)

console.log(person1.name)
console.log(person1.age)

console.log(person2.name)
console.log(person2.age)

console.log(person3.name)
console.log(person3.age)
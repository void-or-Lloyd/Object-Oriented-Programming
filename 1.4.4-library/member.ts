import type Book from "./book.js"

export default class Member {
    private _id: number
    private _name: string
    private _borrowedBooks: Book[] = []

    constructor(id: number, name: string) {
        this._id = id
        this._name = name
    }

    get id(): number {return this._id}
    get name(): string {return this._name}
    get borrowedBooks(): Book[] {return this._borrowedBooks}

    borrow(book: Book): void {
        if (!book.availability) {
            console.error("Book unavailable!")
            return 
        }
        else this._borrowedBooks.push(book)
    }

    return(id: number): void {
        if (!this._borrowedBooks) {
            console.error("No books to return!")
            return
        }

        let borrowedByYou = false
        for (const i of this._borrowedBooks) {
            if (i.id == id) borrowedByYou = true
        }
        if (!borrowedByYou) {
            console.error("You have not borrowed this book!")    
            return
        }

        else for (let i = this._borrowedBooks.length; i > 0; i--) {
            let mi = i - 1
            this._borrowedBooks.splice(mi, 1) 
        }
    }

    idCorrection(newId: number): void {this._id = newId}
}
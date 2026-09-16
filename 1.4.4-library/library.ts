import type Book from "./book.js"
import type Member from "./member.js"

export default class Library {
    private _books: Book[] = []
    private _members: Member[] = []

    addBook(book: Book) {
        this._books.push(book)
    }

    addMember(member: Member): void {
        this._members.push(member)
    }

    findBook(id: number): Book | undefined {
        for (const book of this._books) {
            if (book.id == id) return book
            if (book.id == undefined) return undefined
        }
    }

    findMember(id: number): Member | undefined {
        for (const member of this._members) {
            if (member.id == id) return member
            if (member.id == undefined) return undefined
        }
    }

    borrowBook(memberId: number, bookId: number): void {
        let borrowingMember
        let borrowingBook

        for (const member of this._members) if (member.id == memberId) borrowingMember = member
        if (!borrowingMember) return
        
        for (const book of this._books) if (book.id == bookId) borrowingBook = book
        if (!borrowingBook) return


        if (!borrowingBook.availability) {
            console.log("Book is currently unavailable!")
            return
        }

        borrowingMember.borrow(borrowingBook)
        borrowingBook.borrow()
    }


    returnBook(memberId: number, bookId: number) {
        let returningMember
        let returningBook

        for (const member of this._members) if (member.id == memberId) returningMember = member
        if (!returningMember) return

        for (const book of this._books) if (book.id == bookId) returningBook = book
        if (!returningBook) return

        returningMember.return(returningBook.id)
        returningBook.return()
    }


    showBooks(): void {
        console.log("--- Books ---")
        for (const book of this._books) {
            let bookAvailability
            if (book.availability) bookAvailability = "Available"
            else bookAvailability = "Borrowed"
            console.log(book.id + " - " + book.title + " - " + book.author + " - " + bookAvailability)
        }
    }

    showMembers(): void {
        console.log("--- Members ---")
        for (const member of this._members) {
            console.log(member.id + " - " + member.name + " - Books currently borrowed: " + member.borrowedBooks.length)
        }
    }
}
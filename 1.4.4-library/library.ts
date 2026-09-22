import type Book from "./book.js"
import type Member from "./member.js"
let nextBookId: number = 1
let nextMemberId: number = 1


export default class Library {
    private _books: Book[] = []
    private _members: Member[] = []

    addBook(book: Book) {
        for (const existingBook of this._books) {
            if (existingBook.id == book.id) {
                console.error("Two books cannot have the same ID!")
                console.error("The new book's ID will be automatically corrected!")
                book.idCorrection(nextBookId)
            }
        }
        nextBookId += 1
        this._books.push(book)
    }

    addMember(member: Member): void {
        for (const existingMember of this._members) {
            if (existingMember.id == member.id) {
                console.error("Two members cannot have the same ID!")
                console.error("The new member's ID will be automatically corrected!")
                member.idCorrection(nextMemberId)
            }
        }
        nextMemberId += 1
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
        if (!borrowingMember) {
            console.error("Member does not exist!")
            return
        }
        
        for (const book of this._books) if (book.id == bookId) borrowingBook = book
        if (!borrowingBook) {
            console.error("Book does not exist in this library!")
            return
        }


        if (!borrowingBook.availability) {
            console.error("Book is currently unavailable!")
            return
        }

        borrowingMember.borrow(borrowingBook)
        borrowingBook.borrow()
    }


    returnBook(memberId: number, bookId: number) {
        let returningMember
        let returningBook

        for (const member of this._members) if (member.id == memberId) returningMember = member
        if (!returningMember) {
            console.error("Member does not exist!")
            return
        }

        for (const book of this._books) if (book.id == bookId) returningBook = book
        if (!returningBook) {
            console.error("Book does not exist in this library!")   
            return
        }

        returningMember.return(returningBook.id)
        returningBook.return()
    }


    showBooks(): void {
        if (this._books.length == 0) {
            console.log("No books!")
            console.log(" ")
            return
        }

        // console.log(this._books)

        console.log("--- Books ---")
        for (const book of this._books) {
            let bookAvailability
            if (book.availability) bookAvailability = "Available"
            else bookAvailability = "Borrowed"
            console.log(book.id + " - " + book.title + " - " + book.author + " - " + bookAvailability)
        }
        console.log(" ")
    }

    showMembers(): void {
        if (this._members.length == 0) {
            console.log("No members!")
            console.log(" ")
            return
        }

        console.log("--- Members ---")
        for (const member of this._members) {
            console.log(member.id + " - " + member.name + " - Books currently borrowed: " + member.borrowedBooks.length)
        }
        console.log(" ")
    }
}
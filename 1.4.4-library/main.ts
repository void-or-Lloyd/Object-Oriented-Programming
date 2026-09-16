import Library from "./library.js"
import Member from "./member.js"
import Book from "./book.js"

const library = new Library

const bookID1 = new Book(1, "The Hobbit", "J.R.R. Tolkien")
const bookID2 = new Book(2, "1984", "George Orwell")
const memberID1 = new Member(1, "Tom")

library.addBook(bookID1)
library.addBook(bookID2)
library.addMember(memberID1)

library.borrowBook(1, 3)

library.showBooks()
library.showMembers()

library.returnBook(1, 2)

library.showBooks()
library.showMembers()
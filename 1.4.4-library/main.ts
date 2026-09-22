import { createInterface } from "node:readline/promises"
import Library from "./library.js"
import Member from "./member.js"
import Book from "./book.js"


async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    const library = new Library
    let exit: boolean


    const ui = async () => {while(!exit) {

        console.log("--- Library ---")
        console.log("1. Show books")
        console.log("2. Add book")
        console.log("3. Show members")
        console.log("4. Register member")
        console.log("5. Borrow book")
        console.log("6. Return book")
        console.log("7. Show member's borrowed books")
        console.log("8. Exit")
        console.log(" ")
        const action = await rl.question("Choose an option > ")
        console.log(" ")

        const actionAnswer = action.toLowerCase()
        if (Number(action) == 1 || actionAnswer == "show books" || actionAnswer == "books") library.showBooks()
        if (Number(action) == 2 || actionAnswer == "add book" || actionAnswer == "add") {
            const newBookId = await rl.question("Enter book ID: ")
            if (newBookId.toLowerCase() == "cancel") ui()
            const newBookTitle = await rl.question("Enter title: ")
            if (newBookTitle.toLowerCase() == "cancel") ui()
            const newBookAuthor = await rl.question("Enter author: ")
            if (newBookAuthor.toLowerCase() == "cancel") ui()
            const book = new Book(Number(newBookId), newBookTitle, newBookAuthor)
            library.addBook(book)
        }

        if (Number(action) == 3 || actionAnswer == "show members" || actionAnswer == "members") library.showMembers()
        if (Number(action) == 4 || actionAnswer == "register member" || actionAnswer == "register") {
            const newMemberId = await rl.question("Enter member ID: ")
            if (newMemberId.toLowerCase() == "cancel") ui()
            const newMemberName = await rl.question("Enter name: ")
            if (newMemberName.toLowerCase() == "cancel") ui()
            const member = new Member(Number(newMemberId), newMemberName)
            library.addMember(member)
        }

        if (Number(action) == 5 || actionAnswer == "borrow book" || actionAnswer == "borrow") {
            const borrowingMemberId = await rl.question("Enter Member ID: ")
            if (borrowingMemberId.toLowerCase() == "cancel") ui()
            const borrowingBookId = await rl.question("Enter book ID: ")
            if (borrowingBookId.toLowerCase() == "cancel") ui()

            library.borrowBook(Number(borrowingMemberId), Number(borrowingBookId))
        }

        if (Number(action) == 6 || actionAnswer == "return book" || actionAnswer == "return") {
            const returningMemberId = await rl.question("Enter Member ID: ")
            if (returningMemberId.toLowerCase() == "cancel") ui()
            const returningBookId = await rl.question("Enter book ID: ")
            if (returningBookId.toLowerCase() == "cancel") ui()

            library.returnBook(Number(returningMemberId), Number(returningBookId))
        }

        if (Number(action) == 7 || actionAnswer == "show member's borrowed books" || actionAnswer == "borrowed books") {
            const memberBorrowedBooks = await rl.question("Enter member ID: ")
            if (memberBorrowedBooks.toLowerCase() == "cancel") ui()

            const findMember = library.findMember(Number(memberBorrowedBooks))
            if (!findMember) {
                console.error("Member does not exist!")
                return
            }
            console.log("--- " + findMember.name + "'s borrowed books ---")
            for (const i of findMember.borrowedBooks) {
                console.log(i.id + " - " + i.title + " - " + i.author)
            }
        }

        if (Number(action) == 8 || actionAnswer == "exit") exit = true
        if (exit) rl.close()

    }}
    ui()
}

main()












// const bookID1 = new Book(1, "The Hobbit", "J.R.R. Tolkien")
// const bookID2 = new Book(2, "1984", "George Orwell")
// const memberID1 = new Member(1, "Tom")

// library.addBook(bookID1)
// library.addBook(bookID2)
// library.addMember(memberID1)

// library.borrowBook(1, 1)
// library.borrowBook(1, 1)
// // library.showBooks()
// // library.showMembers()

// library.returnBook(1, 1)

// library.showBooks()
// library.showMembers()
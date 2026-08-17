class Bok {
    titel: string = ""
    forfattare: string = ""
    isbn: string = ""
    antalSidor: number = 0
}


const bok1 = new Bok()
bok1.titel = "The Hobbit"
bok1.forfattare = "J.R.R. Tolkien"
bok1.isbn = "9780007458424"
bok1.antalSidor = 310


const bok2 = new Bok()
bok2.titel = "Harry Potter och de vises sten"
bok2.forfattare = "J.K. Rowling"
bok2.isbn = "9789129723946"
bok2.antalSidor = 384


console.log(bok1)
console.log(bok2)
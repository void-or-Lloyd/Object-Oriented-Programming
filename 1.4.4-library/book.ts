export default class Book {
    private _id: number
    private _title: string
    private _author: string
    private _availability: boolean = true

    constructor(id: number, title: string, author: string) {
        this._id = id
        this._title = title
        this._author = author
    }

    get id(): number {return this._id}
    get title(): string {return this._title}
    get author(): string {return this._author}
    get availability(): boolean {return this._availability}
    
    borrow(): void {
        if (!this._availability) {
            console.error("Book unavailable!")
            return
        }
        else this._availability = false
    }

    return(): void {
        this._availability = true
    }

    idCorrection(newId: number): void {this._id = newId}
}
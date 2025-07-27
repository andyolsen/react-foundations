export default class Book {
    public title: string;
    public author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    toString() {
        return `${this.title}, by ${this.author}`;
    }
}
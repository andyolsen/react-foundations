export default class Film {
    public name: string;
    public genre: string;
    public blurb: string;

    constructor(name: string, genre: string, blurb: string) {
        this.name = name;
        this.genre = genre;
        this.blurb = blurb;
    }

    toString() {
        return `${this.name} [${this.genre}], ${this.blurb}`;
    }
}
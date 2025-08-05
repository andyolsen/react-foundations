import Book from './Book'
import Film from './Film'

export default class DataProvider {

    private static _books = [
        new Book('Millennium', 'Stieg Larsson'),
        new Book('A Christmas Carol', 'Charles Dickens'),
        new Book('The Son', 'Jo Nesbo'),
    ]

    private static _films = [
        new Film('Airplane', 'Comedy', 'Classic plane spoof'),
        new Film('Skyfall', 'Adventure', 'Bond spy yarn'),
        new Film('Love Actually', 'RomCom', ' Hugh Grant playing Hugh Grant'),
        new Film('Mission Impossible', 'Adventure', ' Hi-octane stunt fest')
    ]

    static getAllBooks() : Array<Book> {
        return DataProvider._books
    }

    static getAllFilms() : Array<Film> {
        return DataProvider._films
    }
}
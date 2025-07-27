import Book from './Book'
import Film from './Film'

export default function MoreStuff({books, films, format}: {books: Array<Book>, films: Array<Film>, format: string}) {

	console.log(`Optional exercise, make use of ${books}, ${films}, ${format}`)
	
    return (
		<div className="content">
			Implement MoreStuff component UI here!
		</div>
    )
}
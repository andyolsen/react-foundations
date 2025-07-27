import Book from './Book'
import Film from './Film'
import LikePanel from './LikePanel'

export default function MoreStuff({books, films}: {books: Array<Book>, films: Array<Film>}) {

	return (
		<div className="content">
			<h1>More Stuff</h1>
			<h2>Summary Info</h2>
			<p>Number of books: {books.length}</p>
			<p>Number of films: {films.length}</p>
			<LikePanel />
		</div>
    )
}
import Book from './Book'
import ItemsList from './ItemsList'
import Table from './Table'

export default function Books({books, format} : {books: Array<Book>, format: String}) {    
	
	return (
		<div className="content">
			<h1>Books</h1>
			{
				format === "TABLE" ?  
					<Table items={books} /> :
					<ItemsList items={books} ordered={format === "ORDERED_LIST"} /> 
			}
		</div>
    )
}
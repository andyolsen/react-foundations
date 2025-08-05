import ItemsList from './ItemsList'
import Table from './Table'
import Film from './Film'

export default function Films({films, format} : {films: Array<Film>, format: String}) {
	
    return (
		<div className="content">
			<h1>Films</h1>
			{
				format === "TABLE" ?  
					<Table items={films} /> :
					<ItemsList items={films} ordered={format === "ORDERED_LIST"} /> 
			}
		</div>
    )
}
interface Item {
	toString() : String;
}

export default function ItemsList({items=[], ordered=false} : {items: Array<Item>, ordered: boolean}) {
	
	if (items.length === 0) {
		return <div>[no items]</div>
	}
	else {
		const ListTag = ordered ? 'ol' : 'ul'
		return (
			<ListTag>
			{
				items.map((item, i) => <li key={i}>{item.toString()} </li> )
			}
			</ListTag>
		)
	}
}
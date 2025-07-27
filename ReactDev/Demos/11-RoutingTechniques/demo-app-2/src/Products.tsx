import { Link } from 'react-router-dom';
import { Catalog } from './Catalog';

export default function Products() {
	
	const products = Catalog.getAllProductItems()

	return (
		<>
			<h1>Products</h1>
			<ul>
			{
				products.map((p, i) =>
					<li key={i}>
						<Link to={`/product/${p.id}`}>{p.description}</Link>
					</li>
				)
			}
			</ul>
		</>
    )
}
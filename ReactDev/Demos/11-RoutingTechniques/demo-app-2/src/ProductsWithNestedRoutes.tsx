import { Link, Outlet } from 'react-router-dom';
import { Catalog } from './Catalog';

export default function ProductsWithNestedRoutes() {
	
	let products = Catalog.getAllProductItems()

	return (
		<>
			<h1>Products</h1>
			<ul>
			{
				products.map((p, i) =>
					<li key={i}>
						<Link to={`${p.id}`}>{p.description}</Link>  { /* Note this is a relative path */ }
					</li>
				)
			}
			</ul>

			<Link to='summary'>Summary</Link> { /* Note this is a relative path */ }
			
			<hr />

			<Outlet />   { /* Render the nested component here */ }

		</>
    )
}
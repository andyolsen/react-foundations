import { Catalog } from './Catalog';

export default function ProductSummary() {
	
	let products = Catalog.getAllProductItems()

	let count = products.length;
	let totalvalue = products.reduce((total, prod) => total + prod.price, 0);

	return (
		<>
			<h1>Product Summary</h1>
			<div>Number of products: {count}</div>
			<div>Total value: {totalvalue}</div>
		</>
    )
}
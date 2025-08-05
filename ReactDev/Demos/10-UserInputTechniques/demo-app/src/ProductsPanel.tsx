import type { IProduct } from "./IProduct"

export default function ProductsPanel({products}: {products: IProduct[]}) {

    return (
		<div hidden={products.length === 0}>
			<h2>Products</h2>
			<ul>
			{
				products.map((p: IProduct, i: number) => <li key={i}>{p.description}, &pound;{p.price}, {p.category} </li>)	
			}
			</ul>
		</div>
    )
}
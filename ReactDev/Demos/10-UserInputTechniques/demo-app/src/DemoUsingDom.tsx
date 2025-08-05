import { useState } from 'react';
import type { IProduct } from './IProduct'
import ProductsPanel from './ProductsPanel';

export default function DemoUsingDom() {

	const categories = ['', 'Food/beverage', 'Clothing', 'Audio/visual'];

	let [products, setProducts] = useState(new Array<IProduct>());

    function onAddProduct() {

		const descriptionElem = document.getElementById('description') as HTMLInputElement;
		const priceElem = document.getElementById('price') as HTMLInputElement;
		const categoriesElem = document.getElementById('categories') as HTMLSelectElement;

		const newProduct = {
			description: descriptionElem.value, 
			price: Number(priceElem.value),
			category: categoriesElem.value
		};
		setProducts([...products, newProduct]);
		
		descriptionElem.value = '';
		priceElem.value = '';
		categoriesElem.value = '';
    }

    return (
        <>
			<h1>Using DOM</h1>

			<div>
				<label>Description</label>
				<input type='text' id='description'/>
			</div>				
			
			<div>
				<label>Price</label>
				<input type='number' id='price'/>
			</div>
			
			<div>
				<label>Category</label>
				<select id='categories'>
				{
					categories.map((c,i) => <option value={c} key={i}>{c}</option>)	
				}
				</select>
			</div>

			<div>
				<button onClick={onAddProduct}>Add Product</button>
			</div>

			<ProductsPanel products={products} />
		</>
    )
}
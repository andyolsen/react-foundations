import React from 'react';
import { useState } from 'react';
import type { IProduct } from './IProduct'
import ProductsPanel from './ProductsPanel';

export default function DemoUncontrolledComponent() {

	const categories = ['', 'Food/beverage', 'Clothing', 'Audio/visual'];

	let [products, setProducts] = useState(new Array<IProduct>());

	let descriptionRef = React.useRef<HTMLInputElement>(null); 
	let priceRef = React.useRef<HTMLInputElement>(null);
	let categoriesRef = React.useRef<HTMLSelectElement>(null);

    function onAddProduct() {

		const descriptionElem = descriptionRef.current;
		const priceElem = priceRef.current;
		const categoriesElem = categoriesRef.current;

		const newProduct = {
			description: descriptionElem!.value, 
			price: Number(priceElem!.value),
			category: categoriesElem!.value
		};
		setProducts([...products, newProduct]);
		
		descriptionElem!.value = '';
		priceElem!.value = '';
		categoriesElem!.value = '';
    }

    return (
        <>
			<h1>Uncontrolled Component</h1>

			<div>
				<label>Description</label>
				<input type='text' ref={descriptionRef}/>
			</div>				
			
			<div>
				<label>Price</label>
				<input type='number' ref={priceRef}/>
			</div>
			
			<div>
				<label>Category</label>
				<select ref={categoriesRef}>
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
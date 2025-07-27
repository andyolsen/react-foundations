import { useState } from 'react';
import type { IProduct } from './IProduct'
import ProductsPanel from './ProductsPanel';

export default function DemoControlledComponent() {

	const categories = ['', 'Food/beverage', 'Clothing', 'Audio/visual'];

	let [products, setProducts] = useState(new Array<IProduct>());
	let [description, setDescription] = useState('');
	let [price, setPrice] = useState('');
	let [category, setCategory] = useState('');

    function onAddProduct() {

		const newProduct = {
			description: description, 
			price: Number(price),
			category: category
		};
		setProducts([...products, newProduct]);
		
		setDescription('');
		setPrice('');
		setCategory('');
    }

    return (
        <>
			<h1>Controlled Component</h1>

			<div>
				<label>Description</label>
				<input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
			</div>				
			
			<div>
				<label>Price</label>
				<input type='number' value={price} onChange={e => setPrice(e.target.value)}/>
			</div>
			
			<div>
				<label>Category</label>
				<select value={category} onChange={e => setCategory(e.target.value)}>
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
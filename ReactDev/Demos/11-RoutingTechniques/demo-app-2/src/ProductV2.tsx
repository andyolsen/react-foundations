import { useParams, Link, useNavigate } from 'react-router-dom'
import { Catalog } from './Catalog'

export default function Product() {
	
	const { id } : any = useParams();
	const navigate = useNavigate();

	if (!id) {
		return (
			<div>
				<h1>Product id not specified</h1>
			</div>
		)
	}

	const prod = Catalog.getProductItemById(id)
	if (!prod) {
		return (
			<div>
				<h1>Product {id} not found</h1>
			</div>
		)
	}
	else {
		return (
			<>
				<h1>Product details</h1>
				<div>Description: {prod.description}</div>		
				<div>Price: {prod.price}</div>
				<div>Likes: {prod.likes}</div>
				<div>Most recent like: {prod.mostRecentLike}</div>
				
				<p>
					<Link to='/products'>Back to all products</Link>
				</p>
				
				<p>
					<input type='text' placeholder='Enter local URL to go to' onKeyUp={(e: any) => {
						if (e.key === 'Enter') 
							navigate(e.target.value);
					}} />
				</p>
			</>
	    )
	}
}
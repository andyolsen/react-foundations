import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const regions = [
	{ id: 'emea',  name: 'Europe, the Middle East and Africa'},
	{ id: 'na',    name: 'North America'},
	{ id: 'latam', name: 'Latin America'},
	{ id: 'apac',  name: 'Asia-Pacific'},
]

export default function TsAndCs() {
	return ( 
		<>
			<h1>Terms and conditions home page</h1>
			<ul>
			{
				regions.map((region, i) =>
					<li key={i}>
						<Link to={`/ts-and-cs/${region.id}`}>{region.name}</Link>
					</li>
				)
			}
			</ul>
		</>
    )
}

export async function getDataForRegion({params} : {params: any}){
	const region = regions.find(r => r.id === params.id)
	const name = region?.name || `unknown region ${params.id}` 
	return {
		id: params.id,
		name: name,
		info: `Some handy info about the terms and conditions for ${name} 😀`,
		timestamp: new Date().toLocaleTimeString()
	}
}

export function TsAndCsForRegion() {

	const regionData: any = useLoaderData()
	
    return ( 
		<>
			<h1>Terms and conditions [{regionData.id.toUpperCase()}]</h1>
			<p>
				{regionData.info}
			</p>
			<p>
				<Link to='/ts-and-cs'>Back to Ts-and-Cs home page</Link>
			</p>
			<br/>
			<hr/>
			<small>Page generated at {regionData.timestamp}</small>
		</>
    )
}
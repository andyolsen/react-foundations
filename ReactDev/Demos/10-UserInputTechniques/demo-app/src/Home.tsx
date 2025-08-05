import splash from './assets/swanseabay.jpg'
import './Home.css'

export default function Home() {
    return (
		<div className="panel">
			<img src={splash} alt='Swansea Bay'/>
			<div className="centered">Accessing UI controls</div>
		</div>
    )
}
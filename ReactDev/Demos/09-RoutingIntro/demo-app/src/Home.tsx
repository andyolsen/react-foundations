import './Home.css'
import splash from './assets/swanseamarina.jpg'

export default function Home() {
    return (
		<>
			<img src={splash} alt='Splash logo' />
			<div className="centered">SPAs and Routing</div>
		</>
    )
}
import splash from './assets/splash.jpg'
import './Home.css'

export default function Home() {
 
	return (
		<>
			<img src={splash} alt='splash'/>
			<div className="centered">My Library</div>
		</>
    )
}
import useWindowSize from "./CustomHooks";
import image from './assets/swanseamarina.jpg'

export default function ImagePanel() {
    
    const windowSize = useWindowSize();
       
    const content = windowSize.currentWidth >= windowSize.currentHeight 
        ? 
        <img 
            src={image} 
            alt='Splash logo'
            hidden={windowSize.currentWidth < windowSize.currentHeight}
        />
        :
        <small>Image hidden (window width &lt; window height)</small>

    return content
}
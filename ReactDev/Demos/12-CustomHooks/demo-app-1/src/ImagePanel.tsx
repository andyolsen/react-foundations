import { useState, useEffect } from 'react';
import image from './assets/swanseamarina.jpg'

export default function ImagePanel() {
    
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [currentHeight, setCurrentHeight] = useState(window.innerHeight);

    useEffect(() => { 

        function onResize() {
            setCurrentWidth(window.innerWidth);
            setCurrentHeight(window.innerHeight);
        }

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])
       
    const content = currentWidth >= currentHeight 
        ? 
        <img 
            src={image} 
            alt='Splash logo'
            hidden={currentWidth < currentHeight}
        />
        :
        <small>Image hidden (window width &lt; window height)</small>

    return content
}
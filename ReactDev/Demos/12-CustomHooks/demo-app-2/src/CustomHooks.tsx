import { useState, useEffect } from 'react';

export default function useWindowSize() {
    
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
       
    return {
        currentWidth: currentWidth,
        currentHeight: currentHeight
    }
}
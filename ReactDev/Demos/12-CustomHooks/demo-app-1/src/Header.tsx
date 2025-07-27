import { useState, useEffect } from 'react';

export default function Header() {

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

    return (
        <>
            <div>Window width {currentWidth}, height {currentHeight} [pixels]</div>
            <hr />
        </>
    )
}
import React, { useState, useEffect } from 'react';

export default function Navigator() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setHasScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div 
        style={{
            zIndex: 50
        }} 
        className={ `flex items-start ${ hasScrolled ? 'bg-gradient-to-b from-black/50' : 'transparent' } h-[100px] w-full p-3 fixed gap-3 text-white` }
    >
        <p>
            Hola
        </p>
    </div>
}
import React, { useState, useEffect } from 'react';
import { NavLink, } from 'react-router-dom';

const routes = [
    {
        path: '/',
        name: 'Main'
    },
    {
        path: '/episodes',
        name: 'Episodes'
    }
];

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

    return <nav 
        style={{
            zIndex: 50
        }} 
        className={ `flex items-start ${ hasScrolled ? 'bg-gradient-to-b from-black/50' : 'transparent' } h-[100px] w-full p-3 fixed gap-3 text-white` }
    >
        <ul className='flex gap-3'>
            {
                routes.map(route => {
                    return <li key={ route.path }>
                        <NavLink 
                            key={ route.path } 
                            to={ route.path } 
                            className='hover:text-green-300 transition-all'
                        >
                            { route.name }
                        </NavLink>
                    </li>
                })
            }
        </ul>
    </nav>
}
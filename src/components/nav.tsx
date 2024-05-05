import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import config from '@config';
import { useMediaQuery } from 'react-responsive';


const Nav = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const [navShadow, setNavShadow] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
        const isTop = window.scrollY < 50;
        if (isTop !== scrolledToTop) {
            setScrolledToTop(!scrolledToTop);
            setNavShadow(isTop ? '' : '0px 4px 8px rgba(0, 0, 0, 0.25)');
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolledToTop]);

    return (
        <nav 
            className='flex items-center justify-center fixed w-full top-0 z-100 md:px-20 px-5 py-3 font-lexendExa bg-background' 
            style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                boxShadow: navShadow 
            }}
        >
            <div id="homeButton">
                <a className='text-primary text-4xl my-8 font-lexendZetta'
                    href='#home'
                    onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                    }}    
                >
                    SW.
                </a>
            </div>
            {isSmallScreen ? (
                <div>
                    <button onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fillRule="evenodd" 
                                clipRule="evenodd" 
                                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" 
                                fill="#ffffff">
                            </path> 
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='flex items-center justify-center absolute top-full left-0 w-full bg-secondary shadow-md text-center'>
                            <ul>
                                {config.navLinks.map(({ url, name }, i) => (
                                    <li className='py-3'
                                        key={i}>
                                    <a
                                        className='text-off-white font-light'
                                        href={url}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setIsMenuOpen(false);
                                          document.querySelector(url)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {name}
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <ul className='flex flex-wrap space-x-8'>
                    {config.navLinks.map(({ url, name }, i) => (
                        <li className='text-off-white text-md hover:text-gray-300 transition-colors duration-100'
                            key={i}
                            style={{ transitionDelay: `${isMounted ? i * 100 : 0}ms` }}
                        >
                            <a href={url}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(url)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

Nav.propTypes = {
    isHome: PropTypes.bool,
};

export default Nav;
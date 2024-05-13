import { ReactNode } from 'react';
import config from '@config';
import { Icon } from '@components/icons';
import { useMediaQuery } from 'react-responsive';

const Footer = (): ReactNode => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className='flex flex-col items-center justify-center mb-5 text-off-black font-light font-lexend mt-16'
            id='footer'
        >
            <p>Designed and built by 
                <span className='text-primary font-normal'> Sophia Wu</span>.
            </p>
            <p>Built with 
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className='text-secondary font-normal hover:text-primary'> React.js </a> 
                and 
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className='text-secondary font-normal hover:text-primary'> Tailwind CSS</a>.
            </p>
            <p>Deployed using 
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className='text-secondary font-normal hover:text-primary'> Vercel</a>.
            </p>
            {isSmallScreen && (
                <div className='flex justify-center space-x-4 mt-3 text-off-white'
                    id='footerIcons'>
                    {config.socialMedia && config.socialMedia.map(({ url, name }) => (
                        <ul className='mb-5 last:mb-0'
                            key={name}>
                            <a className='hover:text-primary transition-colors duration-300'
                                href={url} aria-label={name} target="_blank" rel="noreferrer">
                                <Icon name={name} />
                            </a>
                        </ul>
                    ))}
                </div>
            )}
            
        </div>
    );
};

export default Footer;
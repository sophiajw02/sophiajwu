import { ReactNode } from 'react';
import config from '@config';
import { Icon } from '@components/icons';

const Social = (): ReactNode => {
    return (
        <div className='text-tertiary fixed left-10 top-1/2 transform -translate-y-1/2 invisible md:visible'>
            {config.socialMedia && config.socialMedia.map(({ url, name }) => (
                <ul className='mb-5 last:mb-0'
                    key={name}>
                    <a className='hover:text-quaternary transition-colors duration-300'
                        href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <Icon name={name} />
                    </a>
                </ul>
            ))}
            <div className='absolute w-0.5 h-screen bg-tertiary left-1/2' 
                style={{ top: '100%' }}>
            </div>
        </div>
    );
};

export default Social;
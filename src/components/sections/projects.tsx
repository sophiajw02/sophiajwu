import { ReactNode } from 'react';

const Experience = (): ReactNode => {
    
    return (
        <div className='flex flex-col xl:max-w-5xl md:max-w-xl pt-24' 
            id='projects'>
            <div className='flex justify-between items-center mb-3 w-auto md:mx-5 mx-10' 
                id='projectsHeader'>
                <h2 className='text-4xl text-primary font-semibold font-lexendExa'>
                    Projects
                </h2>
                <div className='flex-grow mx-4 border-t-2 border-light-grey invisible md:visible'></div>
                <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 text-semibold overflow-hidden rounded-full group shadow-btn"
                    id='email-link'
                    href='https://github.com/sophiajw02'>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-700 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-2"></span>
                    <span className="relative w-full text-left text-off-white font-lexendExa transition-colors duration-700 ease-in-out group-hover:text-dark-black">GITHUB</span>
                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                </a>
            </div>
            
            <div className="flex flex-col flex-grow rounded-lg bg-tertiary text-surface shadow-secondary-1 mx-10 md:flex-row shadow-md"
                id='experienceUKG'>
                <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                    src='src\images\example.png'
                    alt='ukg logo' 
                />
                <div className="flex flex-col justify-start p-6">
                    <h3 className='text-2xl text-off-white font-medium font-rubik tracking-wide mt-3 mx-10'>
                        Georgia Tech Marketplace
                    </h3>
                    <p className='text-off-white font-rubik tracking-wide my-3 mx-10'>
                        A marketplace web application for Georgia Tech students to buy and sell goods.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Experience;
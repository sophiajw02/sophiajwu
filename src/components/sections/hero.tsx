import { ReactNode } from 'react';


const Hero = (): ReactNode => {
    return (
        <div className='flex flex-col-reverse sm:flex-row justify-center items-center h-svh xl:max-w-5xl md:max-w-xl'
            id='home'
        >
            <div className='md:w-1/2 w-3/4 mx-5'>
                <h1 className='mt-4 text-off-white xl:text-4xl lg:text-3xl md:text-2xl text-xl font-lexendExa'>
                    Hi there, my name is
                </h1>
                <h2 className='mt-1 text-primary xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-lexendExa'>
                    Sophia Wu.
                </h2>
                <p className='mt-3 mb-6 text-light-grey xl:text-xl text-lg font-light font-lexend'>
                    I'm a Software Developer with a passion for solving problems and learning new things!
                </p>
                {/* <a className='py-3 px-8 bg-button-green rounded-full text-off-white text-lg font-lexendExa shadow-btn hover:shadow-btn-hover'
                    id='email-link'
                    href={`mailto:${'sophiajwu02@gmail.com'}`}>
                    Let's Connect!
                </a> */}
                <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-semibold rounded-full group shadow-btn"
                    id='email-link'
                    href={`mailto:${'sophiajwu02@gmail.com'}`}>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-700 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-2"></span>
                    <span className="relative w-full text-left text-off-white font-lexendExa transition-colors duration-700 ease-in-out group-hover:text-dark-black">Let's Connect!</span>
                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                </a>
            </div>

            <div className='flex items-center justify-center w-1/2' 
                id='img'>
                <img className='rounded-full shadow-image w-full sm:w-96 h-auto mx-5'
                    //src='src\images\me.jpg'
                    src='https://i.imgur.com/TNPm7Ao.png'
                    alt='personal photo'
                />
            </div>
        </div>
    );
};

export default Hero;
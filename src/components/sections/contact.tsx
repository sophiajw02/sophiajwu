import React, { useState, useEffect, ReactNode } from 'react';


const Contact = (): ReactNode => {
    

    return (
        <div className='flex flex-col justify-center items-center xl:max-w-5xl md:max-w-xl pt-24' 
            id='contact'>

            <h2 className="text-4xl text-primary font-semibold font-lexendExa mb-3 md:mx-5 mx-10 text-center">
                Wanna say hello?
            </h2>

            <div className='text-dark-black text-lg text-center font-inter md:mx-32 mx-32 mb-8' 
                id='contactText'>
                <p className='mb-4'>
                I'm currently looking for full-time opportunities. If you think I'd be a good fit for your team, feel free to reach out to me!
                </p>
                <p>
                You can find me on LinkedIn, GitHub, or email me directly!
                </p>
            </div>

            <a className="relative flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-semibold rounded-full group shadow-btn"
                    id='email-link'
                    href={`mailto:${'sophiajwu02@gmail.com'}`}>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-700 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-2"></span>
                    <span className="relative w-full text-center text-dark-black font-lexendExa transition-colors duration-700 ease-in-out group-hover:text-off-white">Say Hello</span>
                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
            </a>
            
        </div>
    );
};

export default Contact;
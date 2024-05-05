import React, { useState, useEffect, ReactNode } from 'react';


const Contact = (): ReactNode => {
    

    return (
        <div className='flex flex-col xl:max-w-5xl md:max-w-xl pt-24' 
            id='contact'>
            <div className='flex justify-between items-center mb-3 w-auto md:mx-5 mx-10' 
                id='contactHeader'>
                <h2 className="text-4xl text-primary font-semibold font-lexendExa">
                    Wanna say hello?
                </h2>
                <div className='flex-grow mx-4 border-t-2 border-light-grey invisible md:visible'></div>
            </div>

                <div className='grid text-light-grey font-inter gap-y-4 md:mx-10 mx-16 w-1/2 flex items-center justify-center' 
                    id='contactText'>
                    <p>
                    I'm currently looking for full-time opportunities starting in May 2023. If you think I'd be a good fit for your team, feel free to reach out to me!
                    </p>
                    <p>
                    You can find me on LinkedIn, GitHub, or email me directly at
                    </p>
                    </div>
        </div>
    );
};

export default Contact;
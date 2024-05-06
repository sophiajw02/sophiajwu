import { ReactNode } from 'react';
import { Icon, IconGitHub } from '@components/icons';

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
                    id='github-link'
                    href='https://github.com/sophiajw02'>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-700 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-2"></span>
                    <span className="relative w-full text-left text-off-white font-lexendExa transition-colors duration-700 ease-in-out group-hover:text-dark-black">GITHUB</span>
                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                </a>
            </div>
            
            <div className="flex flex-col flex-grow rounded-lg bg-tertiary text-surface shadow-secondary-1 mx-10 my-3 md:flex-row shadow-md"
                id='project_gtmarket'>
                <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-80 md:!rounded-none md:!rounded-s-lg"
                    src='\images\gtmarketplace.png'
                    alt='georgia tech marketplace' 
                />
                <div className="flex flex-col justify-start p-6">
                    <h3 className='text-2xl text-off-white font-medium font-rubik tracking-wide mt-3 mx-10'>
                        Georgia Tech Marketplace
                    </h3>
                    <p className='text-sm text-off-white font-rubik tracking-wide my-3 mx-10'>
                        A marketplace web application for Georgia Tech students to buy and sell goods. This platform's aim was to create a safe and secure environment for students to buy and sell goods within the Georgia Tech community.
                    </p>
                    <div className='flex flex-row text-off-white font-rubik tracking-wide mt-3 mx-10 gap-x-2'>
                        <p className='bg-primary rounded-full px-4 py-2'> React.js </p>
                        <p className='bg-primary rounded-full px-4 py-2'> TypeScript </p>
                        <p className='bg-primary rounded-full px-4 py-2'> Tailwind CSS </p>
                        <p className='bg-primary rounded-full px-4 py-2'> Firebase </p>
                    </div>
                    <a className='mx-10 mt-3 text-light-grey hover:text-dark-grey transition-colors duration-300'
                        href='https://github.com/sophiajw02/gt_marketplace' target="_blank" rel="noreferrer">
                        <Icon name={'GitHub'} />
                    </a>
                </div>
            </div>

            <div className="flex flex-col flex-grow rounded-lg bg-tertiary text-surface shadow-secondary-1 mx-10 my-3 md:flex-row shadow-md"
                id='project_py4engineers'>
                <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-80 md:!rounded-none md:!rounded-s-lg"
                    src='\images\python4engineers.jpg'
                    alt='python 4 engineers learning platform' 
                />
                <div className="flex flex-col justify-start p-6">
                    <h3 className='text-2xl text-off-white font-medium font-rubik tracking-wide mt-3 mx-10'>
                        Python 4 Engineers
                    </h3>
                    <p className='text-sm text-off-white font-rubik tracking-wide my-3 mx-10'>
                        A project that I worked on with a team of 5 to create a Python course geared for individuals with a non-CS background. The course was designed to teach engineers how to use Python for data analysis and visualization.
                    </p>
                    <div className='flex flex-row text-off-white font-rubik tracking-wide mt-3 mx-10 gap-x-2'>
                        <p className='bg-primary rounded-full px-4 py-2'> Next.js </p>
                        <p className='bg-primary rounded-full px-4 py-2'> TypeScript </p>
                        <p className='bg-primary rounded-full px-4 py-2'> Tailwind CSS </p>
                        <p className='bg-primary rounded-full px-4 py-2'> Figma </p>
                    </div>
                    <div className='flex flex-row text-off-white mx-10 mt-3 gap-x-3'>
                        <a className='text-light-grey hover:text-dark-grey transition-colors duration-300'
                            href='https://github.com/austin-bmitchell15/cs3803_website' target="_blank" rel="noreferrer">
                            <Icon name={'GitHub'} />
                        </a>
                        <a className='text-light-grey hover:text-dark-grey transition-colors duration-300'
                            href='https://python4engineers.vercel.app/' target="_blank" rel="noreferrer">
                            <Icon name={'Link'} />
                        </a>
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col flex-grow rounded-lg bg-tertiary text-surface shadow-secondary-1 mx-10 my-3 md:flex-row shadow-md"
                id='project_escape_to_cheese'>
                <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-80 md:!rounded-none md:!rounded-s-lg"
                    src='\images\escapetocheese.jpg'
                    alt='escape to cheese unity game' 
                />
                <div className="flex flex-col justify-start p-6">
                    <h3 className='text-2xl text-off-white font-medium font-rubik tracking-wide mt-3 mx-10'>
                        Escape to Cheese
                    </h3>
                    <p className='text-sm text-off-white font-rubik tracking-wide my-3 mx-10'>
                        Led a team of 4 to create a puzzle-based Unity game. Run around as a rat to solve various puzzles to obtain cheese as a reward.
                    </p>
                    <div className='flex flex-row text-off-white font-rubik tracking-wide mt-3 mx-10 gap-x-2'>
                        <p className='bg-primary rounded-full px-4 py-2'> Unity </p>
                        <p className='bg-primary rounded-full px-4 py-2'> C# </p>
                    </div>
                    <div className='flex flex-row text-off-white mx-10 mt-3 gap-x-3'>
                        <a className='text-light-grey hover:text-dark-grey transition-colors duration-300'
                            href='https://github.com/sophiajw02/escape_to_cheese' target="_blank" rel="noreferrer">
                            <Icon name={'GitHub'} />
                        </a>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Experience;
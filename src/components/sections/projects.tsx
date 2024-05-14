import { ReactNode } from 'react';
import { Icon, IconGitHub } from '@components/icons';

const Experience = (): ReactNode => {
    
    return (
        <div className='flex flex-col xl:max-w-7xl md:max-w-xl pt-24' 
            id='projects'>
            <div className='flex justify-between items-center mb-3 w-auto md:mx-5 mx-10' 
                id='projectsHeader'>
                <h2 className='text-4xl text-primary font-semibold font-lexendExa'>
                    Projects
                </h2>
                <div className='flex-grow mx-4 border-t-2 border-light-grey invisible md:visible'></div>
                <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group shadow-btn"
                    id='github-link'
                    href='https://github.com/sophiajw02'>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-700 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-2"></span>
                    <span className="relative w-full text-left text-dark-black font-lexendExa transition-colors duration-700 ease-in-out group-hover:text-off-white">GITHUB</span>
                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                </a>
            </div>
            
            <div className="flex flex-col lg:flex-row rounded-lg bg-tertiary shadow-secondary-1 mx-10 my-3 shadow-md"
                id='project_gtmarket'>
                <img
                    className="h-96 w-auto md:h-auto md:w-96 rounded-t-lg object-cover md:!rounded-none md:!rounded-s-lg"
                    src='\images\gtmarketplace.png'
                    alt='georgia tech marketplace' 
                />
                <div className="flex flex-col justify-start p-6">
                    <h3 className='text-2xl text-off-white font-medium font-rubik tracking-wide mt-3 mx-10'>
                        Georgia Tech Marketplace
                    </h3>
                    <p className='text-off-white font-rubik tracking-wide my-3 mx-10'>
                    A web application developed as a group designed to streamline the process of buying and selling items exclusively within the Georgia Tech community. This platform provides a secure and convenient space for students to engage in transactions, offering features like user verification, real-time listings, and integrated messaging. Tailored to meet the specific needs of Georgia Tech students, the application fosters a sense of community and supports sustainable practices by facilitating the reuse of goods.
                    </p>
                    <p className='text-sm text-off-white font-rubik tracking-wide mx-10'>
                        <span className='font-semibold text-lg'>Demo User</span><br />
                        Email: demouser@gatech.edu<br />
                        Password: 12341234
                    </p>
                    <div className='flex flex-wrap text-off-white text-sm font-rubik tracking-wide mt-3 mx-10 gap-x-2 gap-y-2 text-center'>
                        <p className='bg-primary rounded-full px-4 py-2'> React.js </p>
                        <p className='bg-primary rounded-full px-4 py-2'> TypeScript </p>
                        <p className='bg-primary rounded-full px-4 py-2'> Tailwind</p>
                        <p className='bg-primary rounded-full px-4 py-2'> Firebase </p>
                    </div>
                    <div className='flex flex-row text-off-white mx-10 mt-3 gap-x-3'>
                        <a className='hover:text-light-grey transition-colors duration-300'
                            href='https://github.com/sophiajw02/gt_marketplace' target="_blank" rel="noreferrer">
                            <Icon name={'GitHub'} />
                        </a>
                        <a className='hover:text-light-grey transition-colors duration-300'
                            href='https://cs-4675.web.app/' target="_blank" rel="noreferrer">
                            <Icon name={'Link'} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-grow rounded-lg bg-tertiary text-surface shadow-secondary-1 mx-10 my-3 md:flex-row shadow-md"
                id='project_py4engineers'>
                <img
                    className="h-96 w-auto md:h-auto md:w-96 rounded-t-lg object-cover md:!rounded-none md:!rounded-s-lg"
                    src='\images\python4engineers.jpg'
                    alt='python 4 engineers learning platform' 
                />
                <div className="flex flex-col justify-start p-6">
                    <h3 className='text-2xl text-off-white font-medium font-rubik tracking-wide mt-3 mx-10'>
                        Python 4 Engineers
                    </h3>
                    <p className='text-off-white font-rubik tracking-wide my-3 mx-10'>
                    Collaborated with a team of five to develop an innovative Python course tailored specifically for engineers without a computer science background. This course empowers participants by teaching them how to leverage Python for effective data analysis and visualization, enhancing their analytical capabilities and decision-making processes in engineering contexts.
                    </p>
                    <div className='flex flex-wrap text-off-white text-sm font-rubik tracking-wide mt-3 mx-10 gap-x-2 gap-y-2 text-center'>
                        <p className='bg-primary rounded-full px-4 py-2'> Next.js </p>
                        <p className='bg-primary rounded-full px-4 py-2'> TypeScript </p>
                        <p className='bg-primary rounded-full px-4 py-2'> Tailwind</p>
                        <p className='bg-primary rounded-full px-4 py-2'> Figma </p>
                    </div>
                    <div className='flex flex-row text-off-white mx-10 mt-3 gap-x-3'>
                        <a className='hover:text-light-grey transition-colors duration-300'
                            href='https://github.com/austin-bmitchell15/cs3803_website' target="_blank" rel="noreferrer">
                            <Icon name={'GitHub'} />
                        </a>
                        <a className='hover:text-light-grey transition-colors duration-300'
                            href='https://python4engineers.vercel.app/' target="_blank" rel="noreferrer">
                            <Icon name={'Link'} />
                        </a>
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col flex-grow rounded-lg bg-tertiary text-surface shadow-secondary-1 mx-10 my-3 md:flex-row shadow-md"
                id='project_escape_to_cheese'>
                <img
                    className="h-96 w-auto md:h-auto md:w-96 rounded-t-lg object-cover md:!rounded-none md:!rounded-s-lg"
                    src='\images\escapetocheese.jpg'
                    alt='escape to cheese unity game' 
                />
                <div className="flex flex-col justify-start p-6">
                    <h3 className='text-2xl text-off-white font-medium font-rubik tracking-wide mt-3 mx-10'>
                        Escape to Cheese
                    </h3>
                    <p className='text-off-white font-rubik tracking-wide my-3 mx-10'>
                    Directed a team of four in the development of an engaging puzzle-based game using Unity. In this innovative game, players navigate as a rat, solving a variety of challenging puzzles to collect cheese rewards.
                    </p>
                    <div className='flex flex-wrap text-off-white text-sm font-rubik tracking-wide mt-3 mx-10 gap-x-2 gap-y-2 text-center'>
                        <p className='bg-primary rounded-full px-4 py-2'> Unity </p>
                        <p className='bg-primary rounded-full px-4 py-2'> C# </p>
                    </div>
                    <div className='flex flex-row text-off-white mx-10 mt-3 gap-x-3'>
                        <a className='hover:text-light-grey transition-colors duration-300'
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
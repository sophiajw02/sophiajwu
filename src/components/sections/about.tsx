import { ReactNode } from 'react';


const About = (): ReactNode => {
    

    return (
        <div className="flex flex-col h-full xl:max-w-5xl md:max-w-xl pt-24" 
            id="about">
            <div className='flex justify-between items-center mb-3 w-auto md:mx-5 mx-10' 
                id='aboutHeader'>
                <h2 className="text-4xl text-primary font-semibold font-lexendExa">
                    About Me
                </h2>
                <div className='flex-grow mx-4 border-t-2 border-secondary invisible md:visible'></div>
                <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group shadow-btn"
                    id='email-link'
                    href='/resume.pdf'>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-700 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-2"></span>
                    <span className="relative w-full text-left text-dark-black font-lexendExa transition-colors duration-700 ease-in-out group-hover:text-off-white">RESUME</span>
                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                </a>
            </div>
            
            <div className='w-auto' 
                id='aboutContainer'>
                <div className='grid text-off-black font-inter gap-y-4 md:mx-10 mx-16' 
                    id='aboutText'>
                    <p>
                    Hey! My name is Sophia and I love creating!
                    I recently graduated from <b>Georgia Institute of Technology</b> after completing a Bachelor of Science in Computer Science.
                    </p>
                    <p>
                    My interest started back when I was 10 and got my first computer. I was captured by the design of game and app UIs with their ability to provide easy accessibility while maintaining a beautiful design.
                    </p>
                    <p>Front-end development brings me the joy of being able to bridge creativity with engineering.</p>
                    <p>
                    When I’m not creating and learning, I’m probably spending time with my bunny, listening to music, or playing games from the Fire Emblem series.
                    </p>
                </div>
                <div className='mt-10 mx-5' 
                    id='aboutSkills'>
                    <h3 className='text-2xl text-secondary font-medium font-rubik tracking-wide my-3 mx-10'>
                        RECENT TECHNOLOGIES
                    </h3>
                    <div className='grid grid-cols-3 gap-4 text-dark-black text-sm font-inter mx-10'>
                        <div>
                            <h3 className='text-tertiary text-md font-semibold mb-1'>LANGUAGES</h3>
                            <p>TypeScript</p>
                            <p>JavaScript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>C#</p>
                            <p>SQL</p>
                        </div>
                        <div>
                            <h3 className='text-tertiary text-md font-semibold mb-1'>FRAMEWORKS</h3>
                            <p>Tailwind</p>
                            <p>React</p>
                            <p>Node</p>
                        </div>
                        <div>
                            <h3 className='text-tertiary text-md font-semibold mb-1'>TOOLS</h3>
                            <p>Git & GitHub</p>
                            <p>Jira</p>
                            <p>Node</p>
                            <p>Firebase</p>
                            <p>Figma</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
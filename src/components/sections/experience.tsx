import { ReactNode} from 'react';

const Experience = (): ReactNode => {
    return (
        <div className="flex flex-col xl:max-w-7xl md:max-w-xl pt-24" 
            id="experience">
            <div className='flex justify-between items-center mb-5 w-auto md:mx-5 mx-10' 
                id='experienceHeader'>
                <h2 className="text-4xl text-primary font-semibold font-lexendExa">
                    Experience
                </h2>
                <div className="flex-grow mx-4 border-t-2 border-light-grey invisible md:visible"></div>
            </div>

            <div className="flex flex-col flex-grow rounded-lg bg-tertiary text-surface shadow-secondary-1 mx-10 md:flex-row shadow-md"
                id='experienceUKG'
                style={{ flexGrow: 1 }}>
                <img
                    className="h-96 rounded-t-lg object-cover md:h-auto md:w-96 md:!rounded-none md:!rounded-s-lg"
                    src='\images\ukg_logo.jpg'
                    alt='ukg logo' 
                />
                <div className="flex flex-col justify-start p-6">
                    <h3 className='text-2xl text-off-white font-medium font-rubik tracking-wide mt-3 mx-10'>
                        Software Engineer Intern <span className='text-primary'>@ </span>
                        <a className='text-primary hover:underline' href='https://www.ukg.com/' target='_blank' rel='noopener noreferrer'>
                            UKG
                        </a>
                    </h3>
                    <p className='text-off-white text-sm font-rubik tracking-wide mx-10'>
                        May 2023 - August 2023</p>
                    <ul className='list-disc text-off-white font-rubik tracking-wide my-3 mx-16'>
                        <li className='mb-1'>
                        Worked on quality testing and ensuring payrolls features worked as properly intended for over 75,000+ client companies.
                        </li>
                        <li className='mb-1'>
                            Implemented unit, integration, and automated tests on various features in the UKG Pro product, using C#, Microsoft SQL Server, and NUnit Testing Framework.  and resolved issues with both automated and manual tests, leading to 15% more issues being resolved prior to release.
                        </li>
                        <li className='mb-1'>
                            Proactively identified and resolved issues with both automated and manual tests, ensuring the highest quality standards and maintaining seamless user experiences prior to releases.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Experience;
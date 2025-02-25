import { CodeXml, DraftingCompass, Gamepad2, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import IconCard from './IconCard'

const AboutSection = () => {

    const techStack = {
        frameworksLibraries: [
            { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
            { name: "NextJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "Expressjs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "Nodejs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "TailwindCSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Framer Motion", url: "/logos/motion.svg" },
        ],
        programmingLanguages: [
            { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        ],
        tools: [
            { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
            { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg" },
            { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "npm", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
            { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
            { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
            { name: "ViteJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
            { name: "FireBase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
        ],
        database: [
            { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        ]
    };

    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [aboutRef, aboutInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [educationRef, educationInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [skillsHeadingRef, skillsHeadingInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [skillsRef, skillsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            <section className='mb-8' id='aboutMeSection'>
                <div className='mx-[10vw] my-[10vh] md:mt-[18vh]'>

                    <motion.div 
                        ref={headerRef}
                        initial={{ opacity: 0, y: -50 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                        transition={{ duration: 0.6 }}
                        className='border-b-2 border-dashed border-primaryText pb-8 mb-12' 
                        id='aboutHeader'
                    >
                        <h3 className='text-primaryText text-4xl font font-semibold'>My Story</h3>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        <motion.div 
                            ref={aboutRef}
                            initial={{ opacity: 0, x: -50 }}
                            animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-8 md:w-[60%] md:mr-20" 
                            id='about'
                        >
                            <div className='text-secondaryText flex flex-col gap-2'>
                                <h4 className='text-2xl font-semibold flex items-center gap-2' id='development'><CodeXml size={20} />Development</h4>
                                <p className='text-lg'>I enjoy crafting user-friendly web applications. My expertise includes the <strong>MERN stack</strong>, <strong>Next.js</strong>, and <strong>TailwindCSS</strong>, allowing me to deliver efficient solutions. I believe in continuous learning to stay updated with tech trends.</p>
                            </div>
                            <div className='text-secondaryText flex flex-col gap-2'>
                                <h4 className='text-2xl font-semibold flex items-center gap-2' id='design'><DraftingCompass size={20} />Design</h4>
                                <p className='text-lg'>With a creative mindset in <strong>UI/UX</strong>, I bridge design and development. Using <strong>Figma</strong>, I create engaging prototypes that meet user needs, combining simplicity and elegance for intuitive experiences.</p>
                            </div>
                            <div className='text-secondaryText flex flex-col gap-2'>
                                <h4 className='text-2xl font-semibold flex items-center gap-2' id='hobbies'><Gamepad2 size={20} />Beyond The Screen</h4>
                                <p className='text-lg'>When not coding or designing, I enjoy <strong>music</strong>, <strong>movies</strong>, <strong>hiking</strong>, and <strong>gaming</strong>. virtual landscapes or <strong>exploring nature</strong> inspires and relaxes me.</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            ref={educationRef}
                            initial={{ opacity: 0, x: 50 }}
                            animate={educationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6 }}
                            className="mt-10 md:mt-0 md:w-[40%]" 
                            id='educationTimeline'
                        >
                            <h4 className='text-secondaryText text-2xl font-bold flex items-center gap-2 mb-4'><GraduationCap size={25} className='-rotate-12'/>Education</h4>

                            <div className="relative px-4 text-secondaryText" id='timelineDiv'>

                                <div className="absolute h-full border border-opacity-20 border-secondary" ></div>

                                <div className="flex items-center w-full my-6 md:mb-16 -ml-1.5" >
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-primaryText rounded-full"></div>
                                    </div>
                                    <div className="w-11/12 flex flex-col">
                                        <p className="text-xl font-semibold">Sinhgad Institutes of Management, Pune</p>
                                        <p className="text-lg text-gray-500">Masters of Computer Applications (MCA)</p>
                                        <p className="text-base text-gray-500">Aug 2023 - Present</p>
                                        <p className="text-base text-gray-500">CGPA (until last sem) - 7.93</p>
                                    </div>
                                </div>

                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-primaryText rounded-full"></div>
                                    </div>
                                    <div className="w-11/12 flex flex-col">
                                        <p className="text-xl font-semibold">Shri Shahu Mandir Mahavidyalaya, Pune</p>
                                        <p className="text-lg text-gray-500">Bachelors of Business Administration (BBA)</p>
                                        <p className="text-base text-gray-500">Major - Financial Management</p>
                                        <p className="text-base text-gray-500">Sep 2020 - Aug 2023</p>
                                        <p className="text-base text-gray-500">CGPA - 8.54</p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>

                    <div className='mt-8 w-full'>
                        <motion.h4 
                            ref={skillsHeadingRef}
                            initial={{ opacity: 0, y: -50 }}
                            animate={skillsHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                            transition={{ duration: 0.6 }}
                            className='text-2xl text-primaryText font-semibold py-6' 
                            id="skillsHeading"
                        >
                            What I Work on
                        </motion.h4>
                        
                        <motion.div 
                            ref={skillsRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6 }}
                            className='w-full px-6 flex flex-col md:flex-row gap-8' 
                            id="skills"
                        >
                            <div className='md:w-1/4'>
                                <h5 className='text-primaryText text-sm md:text-lg font-medium mb-3'>Frameworks/Libraries</h5>
                                <div className='flex flex-wrap'>
                                    {techStack.frameworksLibraries.map((item, index) => (
                                        <IconCard key={index} url={item.url} name={item.name} />
                                    ))}
                                </div>
                            </div>

                            <div className='md:w-1/4'>
                                <h5 className='text-primaryText text-lg font-medium mb-3'>Programming Languages</h5>
                                <div className='flex flex-wrap'>
                                    {techStack.programmingLanguages.map((item, index) => (
                                        <IconCard key={index} url={item.url} name={item.name} />
                                    ))}
                                </div>
                            </div>
                            <div className='md:w-1/4'>
                                <h5 className='text-primaryText text-lg font-medium mb-3'>Tools</h5>
                                <div className='flex flex-wrap'>
                                    {techStack.tools.map((item, index) => (
                                        <IconCard key={index} url={item.url} name={item.name} />
                                    ))}
                                </div>
                            </div>
                            <div className='md:w-1/4'>
                                <h5 className='text-primaryText text-lg font-medium mb-3'>Database</h5>
                                <div className='flex flex-wrap'>
                                    {techStack.database.map((item, index) => (
                                        <IconCard key={index} url={item.url} name={item.name} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;
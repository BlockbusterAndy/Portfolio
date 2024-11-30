import {CodeXml, DraftingCompass, Gamepad2, GraduationCap, Icon} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import IconCard from './IconCard'

gsap.registerPlugin(ScrollTrigger, TextPlugin);


const AboutSection = () => {
    
    useGSAP(async () => {
        var tl = gsap.timeline();
        tl.from("#aboutHeader", {
            duration: 1,
            opacity: 0,
            y: -50,
            scrollTrigger: {
                trigger: "#aboutHeader",
                start: "top center",
                end: "+=70",
                scrub: 1,
            }
        });

        tl.from("#about", {
            duration: 1,
            opacity: 0,
            x: -50,
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
                end: "+=70",
                scrub: 1,
            },
        });

        tl.from("#educationTimeline", {
            duration: 1,
            opacity: 0,
            x: 50,
            scrollTrigger: {
                trigger: "#educationTimeline",
                start: "top center",
                end: "+=70",
                scrub: 1,
            },
        });

        tl.from("#skillsHeading", {
            duration: 1,
            opacity: 0,
            y: -50,
            scrollTrigger: {
                trigger: "#skillsHeading",
                start: "top 85%",
                end: "+=100",
                scrub: 1,
            },
        });

        tl.from("#skills", {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%",
                end: "+=70",
                scrub: 1,
            },
        });
    }
    );
    
  return (
    <>
    <section className='mb-8' id='aboutMeSection'>
        <div className='mx-[10vw] my-[10vh] md:mt-[18vh]'>

            <div className='border-b-2 border-dashed border-primaryText pb-8 mb-12' id='aboutHeader'>
                <h3 className='text-primaryText text-4xl font font-semibold'>My Story</h3>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">

                <div className="flex flex-col gap-8 md:w-[60%] md:mr-20" id='about'>
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
                </div>

                <div className="mt-10 md:mt-0 md:w-[40%]" id='educationTimeline'>
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
                </div>

            </div>

            <div className='mt-8 w-full'>
                <h4 className='text-2xl text-primaryText font-semibold py-6' id="skillsHeading">What I Work on</h4>
                <div className='w-full px-6 flex flex-col md:flex-row gap-8' id="skills">
                    <div className='w-1/4'>
                        <h5 className='text-primaryText text-sm md:text-lg font-medium mb-3'>Frameworks/Libraries</h5>
                        <div className=' grid-cols-2 md:flex md:flex-wrap '>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" name="React"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" name="Redux"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" name="NextJS"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" name="Expressjs"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" name="Nodejs"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" name="TailwindCSS"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" name="Bootstrap"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" name="FireBase"/>
                        </div>
                    </div>
                    <div className='w-1/4'>
                    <h5 className='text-primaryText text-lg font-medium mb-3'>Programming Languages</h5>
                        <div className='flex flex-wrap'>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" name="JavaScript"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" name="TypeScript"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" name="Python"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" name="Java"/>
                        </div>
                    </div>
                    <div className='w-1/4'>
                    <h5 className='text-primaryText text-lg font-medium mb-3'>Tools</h5>
                        <div className='flex flex-wrap'>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" name="Figma"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg" name="VS Code"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" name="Git"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" name="npm"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" name="GitHub"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" name="Postman"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" name="ViteJS"/>
                        </div>
                    </div>
                    <div className='w-1/4'>
                    <h5 className='text-primaryText text-lg font-medium mb-3'>Database</h5>
                        <div className='flex flex-wrap'>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" name="MongoDB"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" name="MySQL"/>
                            <IconCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" name="PostgreSQL"/>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </section>
    </>
  )
}

export default AboutSection;
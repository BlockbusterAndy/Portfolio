import { CodeXml, Gamepad2, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import IconCard from './IconCard'
import SkillBar from './ui/SkillBar'

const AboutSection = () => {
    const techStack = {
        frontend: [
            { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
            { name: "NextJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "TailwindCSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Framer Motion", url: "/logos/motion.svg" },
        ],
        backend: [
            { name: "Expressjs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "Nodejs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        ],
        programmingLanguages: [
            { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "C#", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
            { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        ],
        gameDevelopment: [
            { name: "Unity", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
            { name: "Blender", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
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
        data: [
            { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        ]
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section className='relative w-full py-20 px-6 md:px-12 overflow-hidden' id='aboutMeSection'>

            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className='max-w-7xl mx-auto'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className='mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
                        About <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-8"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column: Bio & Interests */}
                        <div className="space-y-8">
                            <div className='prose prose-lg prose-invert text-secondaryText'>
                                <p className="leading-relaxed">
                                    Full-Stack Developer and indie game developer with hands-on experience building scalable web applications and interactive experiences. On the web side, I deliver React-based dashboards, responsive UIs with Tailwind CSS, and REST APIs using Node.js and Express; on the game dev side, I design and build systems in Unity/C#, bringing the same attention to performance and clean architecture. I enjoy turning product requirements into clean, performant solutions and thrive in environments where ownership, learning, and impact matter.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition-colors duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <h3 className='text-xl font-semibold text-white mb-3 flex items-center gap-2'>
                                        <CodeXml size={20} className="text-blue-400" /> Development
                                    </h3>
                                    <p className='text-sm text-secondaryText leading-relaxed'>
                                        Building scalable web apps with <strong>MERN stack</strong>, <strong>Next.js</strong>, and modern CSS frameworks.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/30 transition-colors duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <h3 className='text-xl font-semibold text-white mb-3 flex items-center gap-2'>
                                        <Gamepad2 size={20} className="text-green-400" /> Game Development
                                    </h3>
                                    <p className='text-sm text-secondaryText leading-relaxed'>
                                        Designing interactive systems with <strong>Unity</strong> and <strong>C#</strong>, with the same focus on performance and clean architecture.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Skill Bars */}
                            <div className="mt-8">
                                <h3 className='text-white text-lg font-semibold mb-6'>Core Competencies</h3>
                                <div className="space-y-4">
                                    <SkillBar skill="JavaScript/TypeScript" percentage={90} delay={0.2} />
                                    <SkillBar skill="React & Next.js" percentage={85} delay={0.4} />
                                    <SkillBar skill="Node.js & Express" percentage={80} delay={0.6} />
                                    <SkillBar skill="Unity & C#" percentage={75} delay={0.8} />
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Timeline & Education */}
                        <div className="relative pl-0 lg:pl-10">
                            <h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
                                <Briefcase size={24} className="text-white" /> Experience & Education
                            </h3>

                            {/* Modern Timeline */}
                            <div className="relative border-l-2 border-white/10 ml-3 space-y-10 pl-8 pb-4">

                                {/* Current Role */}
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#0A0A0A] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    <div className="mb-2">
                                        <span className="text-xs font-mono text-blue-400 px-2 py-1 bg-blue-500/10 rounded">Nov 2025 - March 2026</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Full-Stack Developer</h4>
                                    <p className="text-secondaryText text-sm mb-2">Muncho Technologies Pvt. Ltd.</p>
                                    <p className="text-secondaryText text-sm leading-relaxed max-w-md">
                                        Spearheading the development of modern web applications, optimizing performance, and mentoring junior developers.
                                    </p>
                                </div>

                                {/* Internship Role */}
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#0A0A0A] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    <div className="mb-2">
                                        <span className="text-xs font-mono text-blue-400 px-2 py-1 bg-blue-500/10 rounded">March 2025 - Oct 2025</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Full-Stack Developer Intern</h4>
                                    <p className="text-secondaryText text-sm mb-2">Muncho Technologies Pvt. Ltd.</p>
                                    <p className="text-secondaryText text-sm leading-relaxed max-w-md">
                                        Gained hands-on experience in MERN stack development, contributing to key features and learning scalable backend solutions.
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-green-500 rounded-full border-4 border-[#0A0A0A] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <div className="mb-2">
                                        <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">2023 - 2025</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Masters of Computer Applications (MCA)</h4>
                                    <p className="text-secondaryText text-sm mb-2">Sinhgad Institutes of Management, Pune</p>
                                    <p className="text-secondaryText text-sm">Graduated with CGPA: <strong>8.10</strong></p>
                                </div>

                                {/* Item 3 */}
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0A0A0A] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                    <div className="mb-2">
                                        <span className="text-xs font-mono text-purple-400 px-2 py-1 bg-purple-500/10 rounded">2020 - 2023</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Bachelors of Business Administration (BBA)</h4>
                                    <p className="text-secondaryText text-sm mb-2">Shri Shahu Mandir Mahavidyalaya, Pune</p>
                                    <p className="text-secondaryText text-sm">Major in Financial Management. CGPA: <strong>8.54</strong></p>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Tech Stack Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className='mt-24'
                    >
                        <div className="mb-10 text-center">
                            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Toolkit</p>
                            <h3 className='text-3xl font-bold text-white'>Technologies I Use</h3>
                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-secondaryText">A focused toolkit for shipping polished web products and interactive 3D experiences.</p>
                        </div>

                        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {[
                                { title: "Frontend", icons: techStack.frontend },
                                { title: "Backend & APIs", icons: techStack.backend },
                                { title: "Languages", icons: techStack.programmingLanguages },
                                { title: "Game Development", icons: techStack.gameDevelopment },
                                { title: "Workflow", icons: techStack.tools },
                                { title: "Data", icons: techStack.data },
                            ].map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="group self-start rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
                                >
                                    <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
                                        <h4 className="font-semibold text-white">{category.title}</h4>
                                        <span className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] text-secondaryText">{category.icons.length}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {category.icons.map((icon, iconIdx) => (
                                            <IconCard key={iconIdx} url={icon.url} name={icon.name} />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection;

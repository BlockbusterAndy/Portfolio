import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    gsap.registerPlugin(TextPlugin);

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero_section', 'aboutMeSection', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeText = () => {
        gsap.to("#changeText", { duration: 1, text: "aniket jadhav" });
        document.getElementById("changeText").classList.add("drop-shadow-glow");
    };

    const changeTextBack = async () => {
        await gsap.to("#changeText", { duration: 1, text: `aJ` });
        document.getElementById("changeText").classList.remove("drop-shadow-glow");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setMenuOpen(false); // Close mobile menu after clicking
    };    return (
        <nav className="border-dashed border-2 rounded-2xl border-primaryText min-h-[7vh] mx-3 sm:mx-6 my-3 px-3 sm:px-8 py-3 flex flex-wrap justify-between items-center relative">
            <div className="text-primaryText cursor-pointer h-full">
                <span
                    className="text-[1.6rem] font-semibold tracking-wider"
                    onMouseEnter={changeText}
                    onMouseLeave={changeTextBack}
                    id="changeText"
                >
                    aJ
                </span>
            </div>

            {/* Desktop Menu - Always visible on desktop */}
            <ul className="hidden sm:flex text-primaryText text-base sm:text-xl flex-row gap-3 sm:gap-6">
                <li>
                    <button
                        className={`hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 ${
                            activeSection === 'aboutMeSection' ? 'text-blue-400' : ''
                        }`}
                        onClick={() => scrollToSection('aboutMeSection')}
                        aria-label="Navigate to about section"
                    >
                        about
                    </button>
                </li>
                <li>
                    <button
                        className={`hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 ${
                            activeSection === 'projects' ? 'text-blue-400' : ''
                        }`}
                        onClick={() => scrollToSection('projects')}
                        aria-label="Navigate to projects section"
                    >
                        projects
                    </button>
                </li>
                <li>
                    <button
                        className={`hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 ${
                            activeSection === 'contact' ? 'text-blue-400' : ''
                        }`}
                        onClick={() => scrollToSection('contact')}
                        aria-label="Navigate to contact section"
                    >
                        contact
                    </button>
                </li>
            </ul>

            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
                className="sm:hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primaryText"
                    animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"}
                    />                </motion.svg>
            </button>

            {/* Mobile Menu - Only visible when hamburger is clicked */}
            <motion.ul
                initial={false}
                animate={menuOpen ? { 
                    height: "auto", 
                    opacity: 1,
                    y: 0 
                } : { 
                    height: 0, 
                    opacity: 0,
                    y: -10 
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`${
                    menuOpen ? "flex" : "hidden"
                } sm:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-dashed border-2 border-primaryText rounded-2xl mt-2 mx-3 px-6 py-4 text-primaryText text-base flex-col gap-3 z-50`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                <li>
                    <button
                        className={`hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 ${
                            activeSection === 'aboutMeSection' ? 'text-blue-400' : ''
                        }`}
                        onClick={() => scrollToSection('aboutMeSection')}
                        aria-label="Navigate to about section"
                    >
                        about
                    </button>
                </li>
                <li>
                    <button
                        className={`hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 ${
                            activeSection === 'projects' ? 'text-blue-400' : ''
                        }`}
                        onClick={() => scrollToSection('projects')}
                        aria-label="Navigate to projects section"
                    >
                        projects
                    </button>
                </li>
                <li>
                    <button
                        className={`hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 ${
                            activeSection === 'contact' ? 'text-blue-400' : ''
                        }`}
                        onClick={() => scrollToSection('contact')}
                        aria-label="Navigate to contact section"
                    >
                        contact
                    </button>
                </li>            </motion.ul>
        </nav>
    );
};

export default Navbar;

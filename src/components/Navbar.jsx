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
    };    
    return (
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
            </ul>            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
                className="sm:hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2 hover:bg-primaryText/10 transition-all duration-200 relative z-50"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <motion.span
                        className="w-5 h-0.5 bg-primaryText block"
                        animate={menuOpen ? {
                            rotate: 45,
                            y: 6,
                            scaleX: 1.2
                        } : {
                            rotate: 0,
                            y: 0,
                            scaleX: 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                        className="w-5 h-0.5 bg-primaryText block my-1"
                        animate={menuOpen ? {
                            opacity: 0,
                            scaleX: 0
                        } : {
                            opacity: 1,
                            scaleX: 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                        className="w-5 h-0.5 bg-primaryText block"
                        animate={menuOpen ? {
                            rotate: -45,
                            y: -6,
                            scaleX: 1.2
                        } : {
                            rotate: 0,
                            y: 0,
                            scaleX: 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </div>
            </button>{/* Mobile Menu Overlay */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={toggleMenu}
                />
            )}

            {/* Mobile Menu - Slide-in from right */}
            <motion.div
                initial={{ x: "100%" }}
                animate={menuOpen ? { x: 0 } : { x: "100%" }}
                transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    duration: 0.3 
                }}
                className={`sm:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] border-l border-primaryText/20 z-50 shadow-2xl`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                {/* Close button */}
                <div className="flex justify-end p-6">
                    <button
                        onClick={toggleMenu}
                        className="text-primaryText hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-2"
                        aria-label="Close navigation menu"
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                            whileHover={{ rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="px-8 py-4">
                    <div className="text-primaryText text-sm font-medium tracking-wider mb-8 opacity-70">
                        NAVIGATION
                    </div>
                    
                    <ul className="space-y-6">
                        {[
                            { id: 'aboutMeSection', label: 'About', icon: '👤' },
                            { id: 'projects', label: 'Projects', icon: '💼' },
                            { id: 'contact', label: 'Contact', icon: '📬' }
                        ].map((item, index) => (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                                className="group"
                            >
                                <button
                                    className={`w-full text-left py-4 px-6 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                        activeSection === item.id 
                                            ? 'bg-blue-500/10 border-blue-400/50 text-blue-400 shadow-lg shadow-blue-500/20' 
                                            : 'border-primaryText/10 text-primaryText hover:border-primaryText/30 hover:bg-primaryText/5 hover:text-blue-300'
                                    }`}
                                    onClick={() => scrollToSection(item.id)}
                                    aria-label={`Navigate to ${item.label.toLowerCase()} section`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl">{item.icon}</span>
                                        <div>
                                            <div className="text-lg font-medium">{item.label}</div>
                                            {activeSection === item.id && (
                                                <div className="text-xs text-blue-400/70 mt-1">Currently viewing</div>
                                            )}
                                        </div>
                                        <div className="ml-auto">
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity"
                                                whileHover={{ x: 3 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </motion.svg>
                                        </div>
                                    </div>
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Footer section */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="border-t border-primaryText/10 pt-6">
                        <div className="text-primaryText/50 text-xs text-center">
                            © 2025 Aniket Jadhav
                        </div>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    gsap.registerPlugin(TextPlugin);

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

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
        setMenuOpen(false);
    };

    const navLinks = [
        { id: 'aboutMeSection', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <div
                        className="flex items-center text-white font-bold text-2xl tracking-wider cursor-pointer z-50 relative"
                        onClick={() => scrollToSection('hero_section')}
                    >
                        aJ<span className="text-blue-400">.</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    className={`text-sm font-medium transition-colors hover:text-white ${activeSection === link.id ? 'text-white' : 'text-secondaryText'
                                        }`}
                                    onClick={() => scrollToSection(link.id)}
                                >
                                    {link.label}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeDot"
                                            className="w-1 h-1 bg-blue-400 rounded-full mx-auto mt-1"
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block origin-center transition-transform"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-4 h-0.5 bg-white block transition-opacity"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -6, width: "24px" } : { rotate: 0, y: 0, width: "16px" }}
                            className="h-0.5 bg-white block origin-center transition-all"
                        />
                    </button>

                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#0A0A0A] z-40 flex items-center justify-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className={`text-3xl font-bold ${activeSection === link.id ? 'text-white' : 'text-secondaryText'
                                        }`}
                                    onClick={() => scrollToSection(link.id)}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

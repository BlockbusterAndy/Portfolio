import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useState } from "react";

const Navbar = () => {
    gsap.registerPlugin(TextPlugin);

    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <>
            <nav className="border-dashed border-2 rounded-2xl border-primaryText mx-4 sm:mx-8 my-4 px-4 sm:px-12 py-4 flex flex-wrap justify-between items-center">
                <div className="text-primaryText cursor-pointer h-full">
                    <span
                        className="text-[2rem] font-semibold tracking-wider"
                        onMouseEnter={changeText}
                        onMouseLeave={changeTextBack}
                        id="changeText"
                    >
                        aJ
                    </span>
                </div>
                {/* Hamburger Icon */}
                <div
                    className="sm:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-primaryText"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
                        />
                    </svg>
                </div>
                {/* Menu Items */}
                <ul
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } sm:flex text-primaryText text-lg sm:text-2xl flex-col sm:flex-row gap-4 sm:gap-10 mt-4 sm:mt-0`}
                >
                    <li className="hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4">
                        about
                    </li>
                    <li className="hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4">
                        projects
                    </li>
                    <li className="hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4">
                        contact
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;

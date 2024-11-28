import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";


const Navbar = () => {
    gsap.registerPlugin(useGSAP, TextPlugin);

    useGSAP(
        () => {

        }
    );

    const changeText = () => {
        gsap.to("#changeText", {duration: 1, text: "aniket jadhav"})
        //add className drop-shadow-glow
        document.getElementById("changeText").classList.add("drop-shadow-glow");
    }
    const changeTextBack = async () => {
        await gsap.to("#changeText", {duration: 1, text: `aJ`})
        document.getElementById("changeText").classList.remove("drop-shadow-glow");
    }

  return (
    <>
    <nav className=' border-dashed border-2 rounded-2xl border-primaryText mx-8 my-4 px-12 py-4 flex justify-between items-center'>
        <div className='text-primaryText cursor-pointer h-full' >
            {/* <img src="logo.svg" alt="" /> */}
            <span className='text-[2rem] font-semibold tracking-wider' onMouseEnter={changeText} onMouseLeave={changeTextBack} id="changeText">aJ</span>
        </div>
        <ul className='text-primaryText text-2xl flex gap-10'>
            <li className='hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4'>about</li>
            <li className='hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4'>projects</li>
            <li className='hover:cursor-pointer hover:drop-shadow-glow font-normal hover:underline underline-offset-4'>contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;
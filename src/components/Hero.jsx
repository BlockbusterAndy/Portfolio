import React from 'react'
import { Linkedin, Github, Instagram, Download } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TextPlugin from 'gsap/TextPlugin';

const Hero = () => {
    gsap.registerPlugin(useGSAP, TextPlugin);

    useGSAP( async () => {
        gsap.from(".leftSectionElement", {duration: 1, x: -200, opacity: 0, stagger: 0.2, onComplete: () => { document.getElementById('addBorder').classList.add('border-b-2'); document.getElementById('addBorder').classList.add('border-dashed'); document.getElementById('addBorder').classList.add('border-primaryText') },
        }),
        gsap.from("#rightSection", {duration: 1, x: 200, opacity: 0})
    });

  return (
    <>
    <main className='max-h-screen mx-[10vw] my-20'>
        <div className='flex gap-16 hero'>
            <section className='w-full' id='leftSectionElement'>
                <div className=' py-4' id='addBorder'>
                    <div><h1 className='text-primaryText text-4xl leftSectionElement'>Hello, I&apos;m <span className='text-6xl font-medium'>Aniket Jadhav</span></h1></div>
                    <div>
                        <p className='text-primaryText text-6xl font-bold leading-snug leftSectionElement'>Developer & Web <div>{" "}</div>Designer</p>
                    </div>
                </div>
                <div className='mt-4 leftSectionElement'>
                    <p className='text-secondaryText font-semibold text-[1.7rem]'>Web enthusiast crafting seamless interfaces and occasionally shaping their design.</p>
                </div>
                <div className='flex items-center gap-8 mt-6 leftSectionElement'>
                    <div className="flex items-center gap-4">
                        <Linkedin
                            size={50}
                            color="#A3A3A3"
                            className="transition-transform transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-2"
                            id="linkedInIcon"
                        />
                        <Github
                            size={50}
                            color="#A3A3A3"
                            className="transition-transform transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-2"
                            id="gitHubIcon"
                        />
                        <Instagram
                            size={50}
                            color="#A3A3A3"
                            className="transition-transform transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-2"
                            id="instagramIcon"
                        />
                    </div>

                    <div className='px-6 py-2 border-2 border-dashed border-primaryText text-primaryText flex gap-2 items-center rounded-full font-semibold cursor-pointer hover:bg-primaryText hover:drop-shadow-glow hover:text-primaryBg hover:border-0 transition-transform transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-2'>
                        <Download size={30}/>
                        <button className='text-xl'>Resume</button>
                    </div>
                </div>
            </section>
            <section className='w-1/2 overflow-hidden rounded-xl h-min'>
                <img src="https://res.cloudinary.com/dzflqtsc4/image/upload/f_auto,q_auto/fotial97xckndztms4uw" alt="my portrait"  />
            </section>
        </div>
    </main>
    </>
  )
}

export default Hero
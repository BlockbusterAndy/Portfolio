import React from 'react'
import { Linkedin, Github, Instagram, Download } from 'lucide-react';

const Hero = () => {
  return (
    <>
    <main className='max-h-screen mx-[10vw] my-20'>
        <div className='flex gap-16'>
            <section className='w-full'>
                <div className='border-b-2 border-dashed border-primaryText py-4'>
                    <div><h1 className='text-primaryText text-4xl'>Hello, I&apos;m <span className='text-6xl font-medium'>Aniket Jadhav</span></h1></div>
                    <div>
                        <p className='text-primaryText text-6xl font-bold leading-snug'>Developer & Web <div>{" "}</div>Designer</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='text-secondaryText font-semibold text-[1.7rem]'>Web enthusiast crafting seamless interfaces and occasionally shaping their design.</p>
                </div>
                <div className='flex items-center gap-6 mt-6'>
                    <div className='flex items-center gap-4'>
                        <Linkedin size={50} color='#A3A3A3' className='hover:scale-125'/>
                        <Github size={50} color='#A3A3A3' className='hover:scale-125'/>
                        <Instagram size={50} color='#A3A3A3' className='hover:scale-125'/>
                    </div>
                    <div className='px-6 py-2 border-2 border-dashed border-primaryText text-primaryText flex gap-2 items-center rounded-full font-semibold cursor-pointer hover:bg-primaryText hover:drop-shadow-glow hover:text-primaryBg hover:border-0'>
                        <Download size={30}/>
                        <button className='text-xl'>Resume</button>
                    </div>
                </div>
            </section>
            <section className='w-1/2 overflow-hidden rounded-xl h-min' id='rightSection'>
                <img src="photo.jpg" alt="my portrait"  />
            </section>
        </div>
    </main>
    </>
  )
}

export default Hero
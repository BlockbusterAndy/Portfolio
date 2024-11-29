import { Linkedin, Github, Instagram, Download } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import { useState, useEffect } from "react";

const Hero = () => {
  const resumeUrl = "https://drive.google.com/file/d/1KBRggofEp2DqL9hcYic37GK60hk4qjew/view?usp=drive_link";

  useEffect(() => {
    const trackDiv = document.getElementById("trackDiv");
  
    const handleMouseMove = (event) => {
      if (trackDiv) {
        trackDiv.style.left = `${event.clientX}px`;
        trackDiv.style.top = `${event.clientY}px`;
        trackDiv.style.transform = "translate(-100%, -150%)";
      }
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  

  const downloadResume = () => {
    window.open(resumeUrl, "_blank");
  };

  gsap.registerPlugin(useGSAP, TextPlugin);

  useGSAP(async () => {
    gsap.from("#glassmorphism", {
      duration: 1.5,
      opacity: 0,
      ease: "power2.inOut",
    });
    gsap.from(".leftSectionElement", {
      duration: 1,
      x: -200,
      opacity: 0,
      stagger: 0.2,
      onComplete: () => {
        document.getElementById("addBorder").classList.add("border-b-2");
        document.getElementById("addBorder").classList.add("border-dashed");
        document
          .getElementById("addBorder")
          .classList.add("border-primaryText");
      },
    }),
    gsap.from("#rightSection", { duration: 1, x: 200, opacity: 0 });

  });

  return (
    <>
      <main
        className="min-h-[87.5vh] overflow-hidden relative"
        id="hero_section"
      >
        <div className="flex flex-col md:flex-row items-center gap-16 hero mx-[5vw] mt-4 md:mt-[7vh] px-[5vw] py-[10vh] relative glassmorphism overflow-hidden" id="glassmorphism">
          <div className="hidden bg-primaryText backdrop-blur-2xl opacity-5 md:block " id="trackDiv"></div>
          <section
            className="w-full rounded-xl md:w-full"
            id="leftSectionElement"
          >
            <div className="py-4" id="addBorder">
              <div className="my-4">
                <h1 className="text-primaryText text-xl md:text-4xl text-center md:text-left leftSectionElement">
                  Hello,👋 I&apos;m{" "}
                  <span className="text-3xl block md:inline md:text-6xl font-medium">
                    Aniket Jadhav
                  </span>
                </h1>
              </div>
              <div className="my-4">
                <p className="text-primaryText text-4xl text-center md:text-left md:text-6xl font-bold leading-9 leftSectionElement">
                  Developer & Web <span className="hidden md:block"> </span>
                  Designer
                </p>
              </div>
            </div>
            <div className="mt-4 leftSectionElement">
              <p className="text-secondaryText font-semibold text-lg text-center md:text-left md:text-[1.7rem] tracking-wide leading-8">
                Web enthusiast crafting seamless interfaces and occasionally
                shaping their design.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-6 leftSectionElement">
              <div className="flex items-center gap-4">
                <Linkedin size={50} color="#A3A3A3" className="hover-icon" />
                <Github size={50} color="#A3A3A3" className="hover-icon" />
                <Instagram size={50} color="#A3A3A3" className="hover-icon" />
              </div>
              <div
                className="px-6 py-2 border-2 border-dashed border-primaryText text-primaryText flex gap-2 items-center rounded-full font-semibold cursor-pointer hover-glow"
                onClick={() => {
                  downloadResume();
                }}
              >
                <Download size={30} />
                <button className="text-xl">Resume</button>
              </div>
            </div>
          </section>
          <section
            className="overflow-hidden rounded-xl md:block md:w-1/2 "
            id="rightSection"
          >
            <img
              src="https://res.cloudinary.com/dzflqtsc4/image/upload/f_auto,q_auto/fotial97xckndztms4uw"
              alt="my portrait"
              className="max-w-full h-auto md:h-full " // Maintain aspect ratio and prevent overflow
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;

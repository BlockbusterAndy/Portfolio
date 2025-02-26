import { Linkedin, Github, Download, Mail } from "lucide-react";
import Aurora from "./ui/Aurora";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const resumeUrl = "https://res.cloudinary.com/dzflqtsc4/image/upload/v1740565464/Aniket_Jadhav_8668443754_ulxzdp.pdf";

  useEffect(() => {
    const trackDiv = document.getElementById("trackDiv");
    const rect = trackDiv.getBoundingClientRect();
  
    const handleMouseMove = (e) => {
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      if (trackDiv) {
        trackDiv.style.setProperty("--mouse-x", `${x}px`);
        trackDiv.style.setProperty("--mouse-y", `${y}px`);
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

  return (
    <>
    <aside className="absolute top-0 left-0 w-full h-[80vh] md:w-full md:h-full -z-10" id="aurora">
      <Aurora
          colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
      />
    </aside>
      <main className="min-h-[60vh] overflow-hidden relative" id="hero_section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-center gap-16 hero mx-[10vw] mt-4 md:mt-[9vh] px-[5vw] py-[10vh] relative glassmorphism overflow-hidden"
          id="glassmorphism"
        >
          <div className="hidden md:block" id="trackDiv"></div>
          <motion.section
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            className="w-full rounded-xl md:w-full"
          >
            <div className="py-4 border-b-2 border-dashed border-primaryText">
              <div className="my-4">
                <h1 className="text-primaryText text-xl md:text-4xl text-center md:text-left">
                  Hello👋, I&apos;m
                  <span className="text-3xl block md:inline md:text-6xl font-medium"> Aniket Jadhav</span>
                </h1>
              </div>
              <div className="my-4">
                <h2 className="text-primaryText text-4xl text-center md:text-left md:text-6xl font-bold leading-9">
                  Full-Stack Developer & <span className="hidden md:block"> </span>
                  Web Designer
                </h2>
              </div>
            </div>
            <motion.div className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <p className="text-secondaryText font-semibold text-lg text-center md:text-left md:text-[1.7rem] tracking-wide leading-8">
                Web enthusiast crafting seamless interfaces and occasionally shaping their design.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8 mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/in/blockbusterandy" target="_blank"><Linkedin size={50} color="#A3A3A3" className="hover-icon" /></a>
                <a href="https://github.com/blockbusterandy" target="_blank"><Github size={50} color="#A3A3A3" className="hover-icon" /></a>
                <a href="mailto:aniketdj19@gmail.com" target="_blank"><Mail size={50} color="#A3A3A3" className="hover-icon" /></a>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="px-6 py-2 border-2 border-dashed border-primaryText text-primaryText flex gap-2 items-center rounded-full font-semibold cursor-pointer hover-glow"
                onClick={downloadResume}
              >
                <Download size={30} />
                <button className="text-xl">Resume</button>
              </motion.div>
            </motion.div>
          </motion.section>
          <motion.section
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-xl md:block md:w-1/2"
          >
            <img
              src="https://res.cloudinary.com/dzflqtsc4/image/upload/f_auto,q_auto/fotial97xckndztms4uw"
              alt="my portrait"
              className="max-w-full h-auto md:h-full"
            />
          </motion.section>
        </motion.div>
      </main>
    </>
  );
};

export default Hero;

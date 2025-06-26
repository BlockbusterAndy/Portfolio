import { Linkedin, Github, Download, Mail } from "lucide-react";
import Aurora from "./ui/Aurora";
import TechPill from "./ui/TechPill";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const resumeUrl = "https://res.cloudinary.com/dzflqtsc4/image/upload/v1740565464/Aniket_Jadhav_8668443754_ulxzdp.pdf";
  useEffect(() => {
    const trackDiv = document.getElementById("trackDiv");
    if (!trackDiv) return;
    
    const rect = trackDiv.getBoundingClientRect();
    let animationId = null;
  
    const handleMouseMove = (e) => {
      if (animationId) return; // Throttle updates
      
      animationId = requestAnimationFrame(() => {
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        if (trackDiv) {
          trackDiv.style.setProperty("--mouse-x", `${x}px`);
          trackDiv.style.setProperty("--mouse-y", `${y}px`);
        }
        animationId = null;
      });
    };
  
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  const downloadResume = () => {
    window.open(resumeUrl, "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <>
    <aside className="absolute top-0 left-0 w-full h-[85vh] md:w-full md:h-full -z-10" id="aurora">
      <Aurora
          colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
      />
    </aside>
      <main className="min-h-[65vh] overflow-hidden relative" id="hero_section" role="main">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mt-6 mb-4"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for new opportunities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-center gap-8 hero mx-[6vw] mt-2 md:mt-[3vh] px-[3vw] py-[6vh] relative glassmorphism overflow-hidden"
          id="glassmorphism"
        >
          <div className="hidden md:block" id="trackDiv"></div>          <motion.section
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            className="w-full rounded-xl md:w-[60%]"
          >
            <div className="py-2 border-b-2 border-dashed border-primaryText">
              <div className="my-2">
                <h1 className="text-primaryText text-base md:text-2xl text-center md:text-left">
                  Hello👋, I&apos;m
                  <span className="text-xl block md:inline md:text-3xl font-medium bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Aniket Jadhav</span>
                </h1>
              </div>
              <div className="my-2">
                <h2 className="text-primaryText text-2xl text-center md:text-left md:text-3xl font-bold leading-6">
                  Full-Stack Developer & <span className="hidden md:block"> </span>
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Web Designer</span>
                </h2>
              </div>
              
              {/* Tech Stack Pills */}              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start"
              >
                {["React", "Node.js", "TypeScript", "Next.js"].map((tech, index) => (
                  <TechPill key={tech} tech={tech} index={index} />
                ))}
              </motion.div>
            </div>

            <motion.div className="mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <p className="text-secondaryText font-semibold text-sm text-center md:text-left md:text-lg tracking-wide leading-5 mb-2">
                Web enthusiast crafting seamless interfaces and occasionally shaping their design.
              </p>
              <p className="text-secondaryText/80 text-xs text-center md:text-left md:text-base">
                🚀 2+ years of experience building modern web applications<br/>
                🎨 Passionate about creating user-centered digital experiences<br/>
                📍 Based in Pune, India
              </p>
            </motion.div>            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex justify-center md:justify-start gap-6 mt-4 mb-4"
              role="region"
              aria-label="Professional statistics"
            >
              <div className="text-center">
                <div className="text-primaryText text-lg font-bold" aria-label="10 plus projects completed">10+</div>
                <div className="text-secondaryText text-xs">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-primaryText text-lg font-bold" aria-label="2 plus years of experience">2+</div>
                <div className="text-secondaryText text-xs">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-primaryText text-lg font-bold" aria-label="5 plus technologies mastered">5+</div>
                <div className="text-secondaryText text-xs">Technologies</div>
              </div>
            </motion.div><motion.div
              className="flex flex-col md:flex-row items-center gap-4 mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-2" role="navigation" aria-label="Social media links">
                <a 
                  href="https://linkedin.com/in/blockbusterandy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  <Linkedin size={28} color="#A3A3A3" className="hover-icon" />
                </a>
                <a 
                  href="https://github.com/blockbusterandy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  <Github size={28} color="#A3A3A3" className="hover-icon" />
                </a>
                <a 
                  href="mailto:aniketdj19@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Send me an email"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  <Mail size={28} color="#A3A3A3" className="hover-icon" />
                </a>
              </div>
                <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-1.5 border-2 border-dashed border-primaryText text-primaryText flex gap-2 items-center rounded-full font-semibold cursor-pointer hover-glow focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={downloadResume}
                  aria-label="Download my resume PDF"
                >
                  <Download size={20} />
                  <span className="text-base">Resume</span>
                </motion.button>
                  <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-1.5 bg-primaryText text-primaryBg flex gap-2 items-center rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-primaryText/90 focus:outline-none focus:ring-2 focus:ring-green-400"
                  onClick={() => scrollToSection('aboutMeSection')}
                  aria-label="Navigate to about section"
                >
                  <span className="text-base">Let&apos;s Talk</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.section>          <motion.section
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative md:w-[40%] flex justify-center"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"></div>
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-primaryText/20 p-1 bg-gradient-to-br from-blue-400/10 to-green-400/10 backdrop-blur-sm">
              <img
                src="https://res.cloudinary.com/dzflqtsc4/image/upload/f_auto,q_auto,w_350,h_350,c_fill,g_face/fotial97xckndztms4uw"
                alt="Aniket Jadhav - Full Stack Developer"
                className="w-full h-auto rounded-xl object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 bg-primaryText text-primaryBg px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                🚀 Ready to code!
              </motion.div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute top-16 right-12 w-1 h-1 bg-green-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-20 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
            </div>
          </motion.section>        </motion.div>
          {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center mt-8 mb-4"
        >
          <button 
            className="flex flex-col items-center gap-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2" 
            onClick={() => scrollToSection('aboutMeSection')}
            aria-label="Scroll down to about section"
          >
            <span className="text-secondaryText text-xs group-hover:text-primaryText transition-colors">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primaryText/40 rounded-full flex justify-center group-hover:border-primaryText transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-primaryText rounded-full mt-2"
                aria-hidden="true"
              ></motion.div>
            </div>
          </button>
        </motion.div>
      </main>
    </>
  );
};

export default Hero;

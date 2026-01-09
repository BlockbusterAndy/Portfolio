import { Linkedin, Github, Download, Mail, ExternalLink } from "lucide-react";


import TechPill from "./ui/TechPill";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const resumeUrl = "https://res.cloudinary.com/dzflqtsc4/image/upload/v1740565464/Aniket_Jadhav_8668443754_ulxzdp.pdf";

  const downloadResume = () => {
    window.open(resumeUrl, "_blank");
  };

  const openWhatsApp = () => {
    const phoneNumber = "918668443754";
    const message = "Hi Aniket! I came across your portfolio and would like to discuss a potential opportunity with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-10" id="hero_section">

      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-start mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-xs font-medium tracking-wide">Available for new opportunities</span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Building <span className="text-secondaryText">digital</span> <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">experiences</span> that matter.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-secondaryText text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8">
              Hi, I'm <span className="text-white font-semibold">Aniket Jadhav</span>. A Full-Stack Developer & Designer crafting seamless, user-centric interfaces with modern technologies.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <button
                onClick={openWhatsApp}
                className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
              >
                Let's Talk
                <ExternalLink size={18} />
              </button>
              <button
                onClick={downloadResume}
                className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                Resume
                <Download size={18} />
              </button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start gap-4">
              <span className="text-sm text-secondaryText uppercase tracking-widest font-medium">Tech Stack</span>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["React", "Next.js", "Node.js", "TypeScript", "Tailwind"].map((tech, index) => (
                  <TechPill key={tech} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md md:max-w-[400px] aspect-square"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F0F0F]">
              <img
                src="/web_dev.png"
                alt="Aniket Jadhav"
                fetchPriority="high"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge 1 */}
              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3 shadow-lg"
              >
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <div className="text-green-400 font-bold text-xl">10+</div>
                </div>
                <div>
                  <div className="text-xs text-secondaryText uppercase font-bold tracking-wider">Projects</div>
                  <div className="text-white text-sm font-medium">Completed</div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>

        </div>

        {/* Social Links - Vertical on desktop right side, or absolute bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden lg:flex flex-col gap-6 absolute right-0 top-1/2 -translate-y-1/2"
        >
          <a href="https://linkedin.com/in/blockbusterandy" target="_blank" rel="noreferrer" className="text-secondaryText hover:text-blue-400 transition-colors p-2"><Linkedin size={24} /></a>
          <a href="https://github.com/blockbusterandy" target="_blank" rel="noreferrer" className="text-secondaryText hover:text-white transition-colors p-2"><Github size={24} /></a>
          <a href="mailto:aniketdj19@gmail.com" className="text-secondaryText hover:text-green-400 transition-colors p-2"><Mail size={24} /></a>
        </motion.div>

        {/* Mobile Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex lg:hidden justify-center gap-8 mt-12 text-secondaryText"
        >
          <a href="https://linkedin.com/in/blockbusterandy" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
          <a href="https://github.com/blockbusterandy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
          <a href="mailto:aniketdj19@gmail.com" className="hover:text-green-400 transition-colors p-2"><Mail size={24} /></a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('aboutMeSection')}
        >
          <span className="text-[10px] text-secondaryText tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-secondaryText/0 via-secondaryText/50 to-secondaryText/0 relative overflow-hidden">
            <motion.div
              animate={{ y: [-15, 45] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/3 bg-white blur-[1px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

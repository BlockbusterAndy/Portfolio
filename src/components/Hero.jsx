import { Linkedin, Github, Download, Mail, ExternalLink } from "lucide-react";
import TechPill from "./ui/TechPill";
import { motion } from "framer-motion";
import TypewriterText from "./ui/TypewriterText";
import PokemonHoloSlot from "./ui/PokemonHoloSlot";

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
    <section className="relative flex min-h-[680px] w-full flex-col justify-center pb-16 pt-28 lg:min-h-[820px] lg:pt-32" id="hero_section">

      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex justify-center md:justify-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-xs font-medium tracking-wide">Available for new opportunities</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:gap-16">

          {/* Left Content */}
          <motion.div
            className="text-center md:text-left"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={fadeInUp} className="mb-6 max-w-full text-center text-4xl font-bold leading-[1.08] tracking-tight text-white [overflow-wrap:break-word] sm:text-5xl md:text-left md:text-5xl lg:text-6xl xl:text-[4rem]">
              I build <br />
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"><TypewriterText words={["web products.", "game systems.", "interactive tools."]} /></span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-secondaryText md:mx-0 md:text-xl">
              Hi, I'm <span className="text-white font-semibold">Aniket Jadhav</span>. A Full-Stack Developer and indie game developer crafting polished web applications and interactive experiences.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3 md:items-start">
              <span className="text-sm text-secondaryText uppercase tracking-widest font-medium">Tech Stack</span>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["React", "Next.js", "Node.js", "TypeScript", "Tailwind"].map((tech, index) => (
                  <TechPill key={tech} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-6 text-secondaryText md:justify-start xl:hidden">
              <a href="https://linkedin.com/in/blockbusterandy" target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-400" aria-label="LinkedIn"><Linkedin size={21} /></a>
              <a href="https://github.com/blockbusterandy" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub"><Github size={21} /></a>
              <a href="mailto:aniketdj19@gmail.com" className="transition-colors hover:text-green-400" aria-label="Email"><Mail size={21} /></a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] md:max-w-[330px] lg:max-w-[380px]"
          >
            {/* Glow effect behind card */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-green-500/20 blur-3xl" />

            <div className="relative">
              <PokemonHoloSlot />
            </div>
          </motion.div>

        </div>

        {/* Social Links - Vertical on desktop right side, or absolute bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col gap-6 xl:flex"
        >
          <a href="https://linkedin.com/in/blockbusterandy" target="_blank" rel="noreferrer" className="text-secondaryText hover:text-blue-400 transition-colors p-2"><Linkedin size={24} /></a>
          <a href="https://github.com/blockbusterandy" target="_blank" rel="noreferrer" className="text-secondaryText hover:text-white transition-colors p-2"><Github size={24} /></a>
          <a href="mailto:aniketdj19@gmail.com" className="text-secondaryText hover:text-green-400 transition-colors p-2"><Mail size={24} /></a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 xl:flex"
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

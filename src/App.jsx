import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import Marquee from "./components/Marquee"
import ProjectsSection from "./components/ProjectsSection"
import Footer from "./components/Footer"
import LoadingScreen from "./components/ui/LoadingScreen"
import PerformanceMonitor from "./components/ui/PerformanceMonitor"
import DevTools from "./components/ui/DevTools"
import ScrollToTop from "./components/ui/ScrollToTop"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDevTools, setShowDevTools] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Toggle DevTools with Ctrl+Shift+D
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        event.preventDefault();
        setShowDevTools(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);  }, []);

  return (
    <>
      <PerformanceMonitor />
      <DevTools isVisible={showDevTools} />
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <AboutSection />
          <Marquee />
          <ProjectsSection />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  )
}

export default App

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import PaperPlaneAnimation from "./components/PaperPlaneAnimation"
import AboutSection from "./components/AboutSection"
import Marquee from "./components/Marquee"
import ProjectsSection from "./components/ProjectsSection"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      {/* <PaperPlaneAnimation /> */}
      <AboutSection />
      <Marquee />
      <ProjectsSection />
    </>
  )
}

export default App

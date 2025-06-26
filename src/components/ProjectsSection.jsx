import ProjectCard from './ui/ProjectCard'
import { motion } from 'framer-motion'
import { useProjects } from '../hooks/useProjects'
import config from '../config/index.js'

const ProjectsSection = () => {
  const { projects, loading, error } = useProjects(config.USE_API);

  if (loading) {
    return (
      <section className="w-full min-h-[80vh] flex items-center justify-center" id="projects">
        <div className="text-primaryText text-xl">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full min-h-[80vh] flex items-center justify-center" id="projects">
        <div className="text-red-400 text-xl">Error loading projects: {error}</div>
      </section>
    );
  }

  return (
    <>
    <section className="w-full min-h-[80vh]" id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12 mx-[8vw] pt-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primaryText mb-4">
          Featured <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-secondaryText text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in full-stack development and design.
        </p>
      </motion.div>
      
      <div className="mx-[8vw] my-[4vh] grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              github={project.github}
              live={project.live}
              onGoing={project.onGoing}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </div>
    </section>
    </>
  )
}

export default ProjectsSection;
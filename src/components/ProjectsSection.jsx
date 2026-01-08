import ProjectCard from './ui/ProjectCard'
import { motion } from 'framer-motion'
import { useProjects } from '../hooks/useProjects'

const ProjectsSection = () => {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <section className="w-full min-h-[40vh] flex items-center justify-center bg-[#0A0A0A]" id="projects">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="text-secondaryText text-sm tracking-wider">LOADING PROJECTS</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full min-h-[40vh] flex items-center justify-center bg-[#0A0A0A]" id="projects">
        <div className="text-red-400 text-lg bg-red-500/10 px-6 py-4 rounded-xl border border-red-500/20">
          Error loading projects: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-20 bg-[#0A0A0A]" id="projects">

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-secondaryText text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of projects that showcase my passion for building robust, scalable, and user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProjectCard
                title={project.name}
                description={project.description}
                summary={project.summary}
                github={project.github?.href}
                live={project.url?.href}
                technologies={project.keywords}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;
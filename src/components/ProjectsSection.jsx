import ProjectCard from './ui/ProjectCard'
import { motion } from 'framer-motion'

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bid Bazaar - An online auction platform",
      description: "A full-stack web application that allows users to create and participate in online auctions. Built with React, ShadCN UI, TailwindCSS for frontend and Node.js, PostgreSQL, Prisma ORM, SocketIO(for real time communication).",
      github: "https://github.com",
      live: "https://bidbazaar.onrender.com",
      onGoing: true,
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.IO"]
    },
    {
      title: "Portfolio Website",
      description:"Designed and developed a personal portfolio website to showcase my projects and skills. Utilized React, TailwindCSS, and Framer Motion for a responsive and interactive user experience.",
      github: "https://github.com/BlockbusterAndy/Portfolio",
      onGoing: false,
      technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"]
    },
    {
      title: "Paskeep - Password Manager",
      description:"Developed a secure password manager using React and TailwindCSS. Implemented encryption for data security and a user-friendly interface for easy password management.",
      github: "https://github.com/BlockbusterAndy/PassKeep-Password-Manager-React",
      live: "https://passkeep.netlify.app/",
      onGoing: false,
      technologies: ["React", "TailwindCSS", "Local Storage", "Encryption"]
    },
    {
      title: "TipJar - Donation Platform for creators",
      description:"Developed a platform for creators to connect with audiences for financial support. Used Next.js for performance and MongoDB Atlas for data management. Focused on user experience and efficient payment processes.",
      github: "https://github.com/BlockbusterAndy/tip-jar-nextjs",
      onGoing: false,
      technologies: ["Next.js", "MongoDB", "Stripe", "Authentication"]
    }
  ]

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
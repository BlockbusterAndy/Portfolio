import { title } from 'framer-motion/client';
import ProjectCard from './ui/ProjectCard'

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bid Bazaar - An online auction platform",
      description: "A full-stack web application that allows users to create and participate in online auctions. Built with React, ShadCN UI, TailwindCSS for frontend and Node.js, PostgreSQL, Prisma ORM, SocketIO(for real time communication).",
      github: "https://github.com",
      live: "https://bidbazaar.onrender.com",
      onGoing: true
    },
    {
      title: "Portfolio Website",
      description:"Designed and developed a personal portfolio website to showcase my projects and skills. Utilized React, TailwindCSS, and Framer Motion for a responsive and interactive user experience.",
      github: "https://github.com/BlockbusterAndy/Portfolio",
      onGoing: false
    },
    {
      title: "Paskeep - Password Manager",
      description:"Developed a secure password manager using React and TailwindCSS. Implemented encryption for data security and a user-friendly interface for easy password management.",
      github: "https://github.com/BlockbusterAndy/PassKeep-Password-Manager-React",
      live: "https://passkeep.netlify.app/",
      onGoing: false
    },
    {
      title: "TipJar - Donation Platform for creators",
      description:"Developed a platform for creators to connect with audiences for financial support. Used Next.js for performance and MongoDB Atlas for data management. Focused on user experience and efficient payment processes.",
      github: "https://github.com/BlockbusterAndy/tip-jar-nextjs",
      onGoing: false
    }
  ]

  return (
    <>
    <section className="w-full min-h-[100vh]">
      <div className="mx-[10vw] my-[5vh] md:mt-[18vh] grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
            onGoing={project.onGoing}
          />
        ))}
      </div>
    </section>
    </>
  )
}

export default ProjectsSection;
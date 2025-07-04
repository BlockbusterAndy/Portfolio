// Default projects data - this will be overridden by localStorage if admin has made changes
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
    title: "Paskeep - Password Manager",
    description: "Developed a secure password manager using React and TailwindCSS. Implemented encryption for data security and a user-friendly interface for easy password management.",
    github: "https://github.com/BlockbusterAndy/PassKeep-Password-Manager-React",
    live: "https://paskeep.aniketjadhav.com/",
    onGoing: false,
    technologies: ["React", "TailwindCSS", "Local Storage", "Encryption"]
  },
  {
    title: "Portfolio Website",
    description: "Designed and developed a personal portfolio website to showcase my projects and skills. Utilized React, TailwindCSS, and Framer Motion for a responsive and interactive user experience.",
    github: "https://github.com/BlockbusterAndy/Portfolio",
    onGoing: false,
    technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"]
  },
  {
    title: "TipJar - Donation Platform for creators",
    description: "Developed a platform for creators to connect with audiences for financial support. Used Next.js for performance and MongoDB Atlas for data management. Focused on user experience and efficient payment processes.",
    github: "https://github.com/BlockbusterAndy/tip-jar-nextjs",
    onGoing: false,
    technologies: ["Next.js", "MongoDB", "Stripe", "Authentication"]
  }
];

export default projects;

import { motion } from "framer-motion";
import { Loader, Check, Github, Link } from "lucide-react";
import PropTypes from "prop-types";

const InComplete = () => {
  return (
    <div className="flex items-center font-semibold gap-1 border border-[#CA8A04] py-1 px-3 rounded-full w-fit">
      <Loader className="animate-spin" color="#CA8A04" size={20} />
      <h4 className="text-sm text-[#CA8A04]">On Going</h4>
    </div>
  );
};

const Completed = () => {
  return (
    <div className="flex items-center font-semibold gap-1 border border-[#16A34A] py-1 px-3 rounded-full w-fit">
      <Check color="#16A34A" size={20} />
      <h4 className="text-sm text-[#16A34A]">Completed</h4>
    </div>
  );
};

const Button = ({ link, icon, text }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-3xl"
      aria-label={`${text} for project`}
    >
      <button className="flex items-center justify-center sm:justify-start font-semibold gap-2 border border-primaryText dark:border-primaryText light:border-gray-300 rounded-3xl px-4 py-3 w-full sm:w-fit hover:bg-primaryBg dark:hover:bg-primaryBg light:hover:bg-gray-100 hover-glow transition-all duration-200">
        {icon}
        <h4 className="text-sm sm:text-lg text-primaryText dark:text-primaryText light:text-gray-800">{text}</h4>
      </button>
    </motion.a>  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

const ProjectCard = ({ title, description, onGoing, github, live, technologies }) => {
  return (
    <motion.div 
      className="flex flex-col p-4 sm:p-6 border-2 border-dashed border-primaryText rounded-xl overflow-hidden w-full group"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-2 w-full h-full">
        <h4 className="text-lg sm:text-xl font-semibold text-primaryText group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-secondaryText mb-3">{description}</p>
        
        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-blue-400/10 border border-blue-400/20 rounded-md text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {onGoing ? <InComplete /> : <Completed />}
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 md:gap-6 mt-3 pr-1 sm:pr-4">
        {github && <Button icon={<Github size={24} color="#A3A3A3" />} text="Github" link={github} />}
        {live && <Button icon={<Link size={24} color="#A3A3A3" />} text="Live Demo" link={live} />}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onGoing: PropTypes.bool,
  github: PropTypes.string,
  live: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;

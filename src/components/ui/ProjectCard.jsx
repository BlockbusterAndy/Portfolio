import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";

const ProjectCard = ({ title, description, summary, highlights, github, live, technologies }) => {
  return (
    <motion.div
      className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
    >

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col h-full z-10 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex gap-3">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-secondaryText hover:text-white transition-colors" aria-label="Github Repo">
                <Github size={20} />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="text-secondaryText hover:text-white transition-colors" aria-label="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-secondaryText mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        {highlights?.length > 0 && (
          <ul className="mb-6 space-y-2 pl-4 text-sm leading-relaxed text-secondaryText">
            {highlights.map((highlight) => (
              <li key={highlight} className="relative before:absolute before:-left-[17px] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-400">
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {/* Project Summary HTML content if needed, though simple description is cleaner */}
        {summary && (
          <div
            className="text-xs text-secondaryText/60 mb-6 line-clamp-3 hidden"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        )}

        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
          {technologies?.map((tech, index) => (
            <span key={index} className="text-xs font-mono text-blue-400/80 bg-blue-500/10 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
  live: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;

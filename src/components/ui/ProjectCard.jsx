import { motion } from "framer-motion";
import { Loader, Check, Github, Link } from "lucide-react";

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
      className="w-full sm:w-auto"
    >
      <button className="flex items-center justify-center sm:justify-start font-semibold gap-2 border border-primaryText rounded-3xl px-4 py-3 w-full sm:w-fit hover:bg-primaryBg hover-glow">
        {icon}
        <h4 className="text-sm sm:text-lg text-primaryText">{text}</h4>
      </button>
    </motion.a>
  );
};

const ProjectCard = ({ title, description, onGoing, github, live }) => {
  return (
    <motion.div 
      className="flex flex-col p-6 sm:p-10 border-2 border-dashed border-primaryText rounded-xl overflow-hidden w-full hover-glow hover:bg-primaryBg"
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex flex-col gap-3 w-full h-full">
        <h4 className="text-xl sm:text-2xl font-semibold text-primaryText">{title}</h4>
        <p className="text-sm sm:text-xl text-secondaryText">{description}</p>
        {onGoing ? <InComplete /> : <Completed />}
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-8 md:gap-8 mt-4 pr-2 sm:pr-8">
        {github && <Button icon={<Github size={28} color="#A3A3A3" />} text="Github" link={github} />}
        {live && <Button icon={<Link size={28} color="#A3A3A3" />} text="Live Demo" link={live} />}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

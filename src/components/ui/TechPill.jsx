import { motion } from "framer-motion";
import PropTypes from "prop-types";

const TechPill = ({ tech, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 245, 245, 0.15)" }}
      className="px-3 py-1 text-xs bg-primaryText/10 border border-primaryText/20 rounded-full text-primaryText cursor-default transition-all duration-300 hover:border-primaryText/40"
    >
      {tech}
    </motion.span>
  );
};

TechPill.propTypes = {
  tech: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TechPill;

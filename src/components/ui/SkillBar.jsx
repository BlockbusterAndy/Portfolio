import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillBar = ({ skill, percentage, delay = 0 }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-primaryText font-medium text-sm">{skill}</span>
        <span className="text-secondaryText text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-400 to-green-400 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  delay: PropTypes.number,
};

export default SkillBar;

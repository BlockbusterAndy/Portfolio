import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const loadingTexts = [
  "Initializing core modules...",
  "Loading assets...",
  "Compiling styles...",
  "Preparing experience...",
  "Welcome..."
];

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        // Speed up slightly at the end
        const increment = prev > 80 ? 3 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 40); // Slightly slower for more impact

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  useEffect(() => {
    // Switch text based on progress roughly
    const index = Math.min(
      Math.floor((progress / 100) * loadingTexts.length),
      loadingTexts.length - 1
    );
    setTextIndex(index);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primaryBg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />

      <div className="z-10 flex flex-col items-center max-w-sm w-full px-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 relative flex flex-col items-center"
        >
          <div className="text-6xl font-bold tracking-wider text-white flex items-end">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              aJ
            </motion.span>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
              className="text-blue-400"
            >
              .
            </motion.span>
          </div>

          {/* Subtle Glow/Reflection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full -z-10"
          />
        </motion.div>

        {/* Dynamic Text */}
        <div className="h-8 mb-4 overflow-hidden flex items-center justify-center w-full">
          <AnimatePresence mode='wait'>
            <motion.p
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-secondaryText text-sm font-medium tracking-wide"
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden relative">
          {/* Progress Fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Glow on the leading edge */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-md opacity-50" />
          </motion.div>
        </div>

        {/* Percentage */}
        <div className="w-full flex justify-end mt-2">
          <span className="text-xs text-secondaryText/60 font-mono">
            {progress}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;

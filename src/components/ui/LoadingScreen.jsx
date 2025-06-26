import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primaryBg"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg flex items-center justify-center"
        >
          <span className="text-2xl font-bold text-white">A</span>
        </motion.div>
        
        <h2 className="text-2xl font-bold text-primaryText mb-4">
          Aniket <span className="text-blue-400">Jadhav</span>
        </h2>
        
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="text-secondaryText text-sm">
          Loading Portfolio... {progress}%
        </p>
      </div>
    </motion.div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;

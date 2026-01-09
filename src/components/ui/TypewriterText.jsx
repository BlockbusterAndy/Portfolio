import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const TypewriterText = ({ words }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className="inline-block relative w-[120px] lg:w-[150px] text-left">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 text-secondaryText"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
            <span className="invisible">{words[0]}</span> {/* Spacer */}
        </span>
    );
};

TypewriterText.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypewriterText;

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
        // inline-grid: every word occupies the same cell, so the box is always
        // sized to the LONGEST word (and its wrapped height). No overflow.
        <span className="inline-grid max-w-full align-top text-left">
            {words.map((word) => (
                <span
                    key={word}
                    aria-hidden="true"
                    className="col-start-1 row-start-1 invisible"
                >
                    {word}
                </span>
            ))}
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="col-start-1 row-start-1 text-secondaryText"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

TypewriterText.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypewriterText;

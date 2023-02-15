import React from "react";
import { motion } from "framer-motion";

interface MorphingLetterType {
  str: string;
}

const MorphingLetters = ({ str }: MorphingLetterType) => {
  const letters = str?.split(" ");

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: [-50, 0, 50, 0, -30, 0, 30, 0, -20, 0, 20, 0, -10, 0, 10, 0],
    },
    exit: {
      opacity: 0,
      y: -50,
    },
    hover: {
      y: [-100, 0, 100, 0, -60, 0, 60, 0, -40, 0, 40, 0, -20, 0, 20, 0],
    },
  };

  return (
    <>
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          variants={letterVariants}
          initial="initial"
          animate="visible"
          exit="exit"
          transition={{
            duration: Math.random() * 2 + 0.5,
            loop: Infinity,
            ease: "easeInOut",
          }}
          className="font-bold text-white pr-2 pb-2 text-xl md:text-2xl"
          whileHover={{ scale: 2 }}
        >
          {letter}
        </motion.div>
      ))}
    </>
  );
};


export default MorphingLetters;

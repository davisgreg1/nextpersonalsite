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
      y: [-50, -60, 0, 60, 50],
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
        times: [0, 0.25, 0.5, 0.75, 1],
      },
      scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
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
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className={`font-bold text-white text-xl tablet:text-2xl select-none pr-2 pb-2`}
          whileHover={{ scale: 2, rotate: 360 }}
        >
          {letter}
        </motion.div>
      ))}
    </>
  );
};

export default MorphingLetters;

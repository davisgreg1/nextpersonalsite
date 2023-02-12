import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Web Developer", "Software Engineer", "Full Stack Developer", "Father"];

const wordVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
  },
};

const wordTransition = {
  duration: 1,
};

const MorphingWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={index}
      variants={wordVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={wordTransition}
      className="font-bold text-4xl text-white"
    >
      {words[index]}
    </motion.div>
  );
};

export default MorphingWords;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  {word:"Father", color: "text-orange-500"},
  {word:"Web Developer", color: "text-purple-500"},
  {word:"Software Engineer", color: "text-red-500"},
  {word:"Full Stack Developer", color: "text-yellow-500"},
  {word:"Tech Enthusiast", color: "text-green-500"},
  {word:"Dreamer", color: "text-blue-500"},
  {word:"Athlete", color: "text-rose-500"},
];

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
  type: "spring",
  bounce: 0.69,
  duration: 0.9,
};

const animation = ["visible"];

const MorphingWords = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(animation);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      key={index}
      variants={wordVariants}
      initial="initial"
      animate={animate}
      exit="exit"
      transition={wordTransition}
      className={`font-bold text-4xl select-none ${words[index].color}`}
    >
      {words[index].word}
    </motion.div>
  );
};


export default MorphingWords;

import React, { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

interface ParallaxType {
  text: string;
}

const ParallaxText = ({ text }: ParallaxType) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const sectionHeight = useRef(0);
  useEffect(() => {
    if (sectionRef.current) {
      sectionHeight.current = sectionRef.current.offsetHeight;
    }
  }, []);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`50%`, `${sectionHeight.current}px`]
  );
  const fontSize = useTransform(scrollYProgress, [0, 1], [`0.09rem`, `10rem`]);

  return (
    <div ref={sectionRef}>
      <motion.h1
        className={`relative right-[-500px] text-8xl`}
        style={{ y, fontSize }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default ParallaxText;

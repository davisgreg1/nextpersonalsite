import { useScroll, motion, useTransform } from "framer-motion";

interface ParallaxType {
  text: string;
}

const ParallaxText = ({ text }: ParallaxType) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const fontSize = useTransform(scrollYProgress, [0, 1], ["4rem", "0.09rem"]);

  return (
    <motion.h1
      className={`relative right-[-500px] text-8xl`}
      style={{ y, fontSize }}
    >
      {text}
    </motion.h1>
  );
};

export default ParallaxText;

"use client"
import { motion, useAnimation, useCycle } from "framer-motion";
import { useEffect } from "react";
import styles from "./styles.module.css";

export default function Cursor() {
  const [opacity, cycleOpacity] = useCycle(1, 0);

  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      opacity: opacity,
      transition: { duration: 0.5 },
    });
    cycleOpacity();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      startAnimation();
    }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <motion.span
      animate={controls}
      style={{ display: "inline-block" }}
      className={`text-gray-700 ${styles.screenCursor}}`}
    >
      ⎸
    </motion.span>
  );
}

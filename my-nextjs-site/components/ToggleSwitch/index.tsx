"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const switchVariants = {
    on: { x: "22px", backgroundColor: "#60A5FA" },
    off: { x: "2px", backgroundColor: "#E5E7EB" }
  };

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <motion.div
      className="relative w-16 h-8 bg-gray-300 rounded-full user-select-none"
      onClick={handleToggle}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md user-select-none"
        variants={switchVariants}
        animate={isOn ? "on" : "off"}
        transition={{ type: "spring" as const, stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};

export default ToggleSwitch;


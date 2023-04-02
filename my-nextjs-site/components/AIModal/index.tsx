import React from "react";
import { motion } from "framer-motion";
import MyModalContent from "@/components/MyModalContent";

export default function AIModal() {
  return (
    <motion.div
      id="draggableParent"
      initial={{ scale: 0, y: -200 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: -200 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      }}
      className="z-[4] flex flex-col w-full h-full"
    >
      <MyModalContent />
    </motion.div>
  );
}

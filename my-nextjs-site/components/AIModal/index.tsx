import React from "react";
import { motion } from "framer-motion";
import MyModalContent from "@/components/MyModalContent";

export default function AIModal() {
  return (
    <motion.div
      id="draggableParent"
      initial={{ scale: 10, y: -10 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1.4,
        duration: 1.5,
      }}
      className="z-[4] absolute left-[35%] top-[35%]"
    >
      <MyModalContent />
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import MyMap from "@/components/MyMap";
import styles from "./styles.module.css";

function Contact() {
  // Define variants for the ContactForm and MyMap components
  const formVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.2, // Increase the scale for more exaggeration
    },
  };
  const mapVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
    hover: {
      scale: 2.2, // Increase the scale for more exaggeration
    },
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-full mt-24 md:ml-4 md:mt-0 ml-4">
      <div className="w-full p-4">
        <motion.div
          className={`${styles.contactFormDiv} flex w-full justify-center h-[60vh] border-solid border-2 border-black rounded-[10px] mr-4`}
          initial="hidden"
          animate="visible"
          variants={formVariants}
          // whileHover="hover"
        >
          <ContactForm />
        </motion.div>
      </div>
      <motion.div
        className="flex w-[90%] md:w-1/2 h-[50vh] md:h-auto sm:max-md:mt-4"
        initial="hidden"
        animate="visible"
        variants={mapVariants}
        // whileHover="hover"
      >
        <MyMap />
      </motion.div>
    </div>
  );
}

export default Contact;

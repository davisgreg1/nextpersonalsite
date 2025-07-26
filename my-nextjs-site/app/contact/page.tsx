"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import MyMap from "@/components/MyMap";
import styles from "./styles.module.css";
import Footer from "@/components/Footer";

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
        ease: "easeInOut" as const,
        type: "spring" as const,
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
        ease: "easeInOut" as const,
        type: "spring" as const,
        damping: 8,
        stiffness: 100,
      },
    },
    hover: {
      scale: 2.2, // Increase the scale for more exaggeration
    },
  };

  return (
    <>
      <div className="flex flex-col tablet:flex-row justify-between items-center h-full mt-24 tablet:mt-0 ml-4">
        <div className="w-full p-4 pl-0">
          <motion.div
            className={`${styles.contactFormDiv} flex w-full justify-center h-[600px] border-solid border-2 border-black rounded-[10px] mr-4`}
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <ContactForm />
          </motion.div>
        </div>
        <div
          className={`flex w-full h-[500px] tablet:h-auto pr-4 tablet:p-0 overflow-visible mb-10 tablet:mb-0`}
        >
          <motion.div
            className={`flex w-full h-full tablet:h-auto sm:max-tablet:mt-4 ${styles.mapContainer}`}
            initial="hidden"
            animate="visible"
            variants={mapVariants}
          >
            <MyMap />
          </motion.div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Contact;

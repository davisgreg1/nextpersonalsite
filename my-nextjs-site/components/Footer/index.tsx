"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const iconVariants = {
  hover: {
    scale: 2.2,
    transition: {
      duration: 0.3,
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-transparent p-4 flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-4">
        <motion.a
          href="https://www.facebook.com/moneycaptainapp"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg tablet:text-xl ${styles.footerText}`}
          variants={iconVariants}
          whileHover="hover"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          href="https://twitter.com/greg21486"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg tablet:text-xl ${styles.footerText}`}
          variants={iconVariants}
          whileHover="hover"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/gregdavisdeveloper/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg tablet:text-xl ${styles.footerText}`}
          variants={iconVariants}
          whileHover="hover"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/davisgreg1"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg tablet:text-xl ${styles.footerText}`}
          variants={iconVariants}
          whileHover="hover"
        >
          <FaGithub />
        </motion.a>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-lg tablet:text-xl ${styles.footerText}`}
      >
        Made with ❤️ in NYC
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`text-sm tablet:text-base ${styles.footerText} opacity-80`}
      >
        © 2025 GregDavisTech, LLC
      </motion.p>
    </footer>
  );
};

export default Footer;

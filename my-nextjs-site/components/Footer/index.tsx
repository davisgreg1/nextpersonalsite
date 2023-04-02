import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const iconVariants = {
  hover: {
    scale: 2.2,
    transition: {
      duration: 0.3,
    },
  },
};

const Footer = () => {
  const path = usePathname();

  return (
    path !== "/" ? (
      <footer className="bg-transparent p-4 flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-4">
          <motion.a
            href="https://www.facebook.com/moneycaptainapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg tablet:text-xl"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://twitter.com/greg21486"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg tablet:text-xl"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gregdavisdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg tablet:text-xl"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/davisgreg1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg tablet:text-xl"
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
          className="text-black text-lg tablet:text-xl"
        >
          Made with ❤️ in NYC
        </motion.p>
      </footer>
    ) : null
  );
};

export default Footer;

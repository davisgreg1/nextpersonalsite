"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useWindowSize } from "react-use";
import HamburgerLink from "./HamburgerLink";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import styles from "./styles.module.css";

const menuVariants = {
  openLeft: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  openRight: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  closeLeft: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
  closeRight: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
};

const barVariants = {
  closed: {
    rotate: 0,
    y: 0,
  },
  open: {
    rotate: 45,
    y: -25,
  },
  x: {
    rotate: -45,
    y: -4,
  },
  y: {
    rotate: -45,
    y: -15,
  },
};

const hamburgerMenuItems = [
  { id: 0, name: "Home", icon: "🏠", path: "/" },
  { id: 1, name: "About", icon: "ℹ️", path: "/about" },
  { id: 2, name: "Skills", icon: "💻", path: "/skills" },
  { id: 3, name: "Blog", icon: "✍🏿", path: "/blog" },
  { id: 4, name: "Contact", icon: "📧", path: "/contact" },
];

const HamburgerMenu = () => {
  const x = useMotionValue(0);
  const { width } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  const maxDragDistance = width - 70; // subtract the width of the hamburger button
  const dragConstraints = { left: 0, right: maxDragDistance };

  useMotionValueEvent(x, "animationComplete", () => {
    const currentX = x.get();
    const halfOfScreen = width / 2;
    if (currentX < halfOfScreen) {
      x.set(0);
    } else {
      x.set(maxDragDistance);
    }
  });

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="relative p-4">
      <motion.div
        className="hamburger absolute z-[2]"
        style={{ x }}
        drag={isOpen ? false : "x"}
        dragConstraints={dragConstraints}
        onClick={handleClick}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <motion.div
          className={`${styles.bar}`}
          variants={barVariants}
          animate={isOpen ? "x" : "closed"}
        />
        <motion.div
          className={`${styles.bar}`}
          variants={barVariants}
          animate={isOpen ? "y" : "closed"}
          transition={{ delay: 0.1 }}
        />
        <motion.div
          className={`${styles.bar}`}
          variants={barVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ delay: 0.1 }}
        />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white shadow-lg w-72 dark:bg-black dark:text-white pt-4"
            style={{
              top: 0,
              right: x.get() > width / 2 ? 0 : "unset",
              left: x.get() > width / 2 ? "unset" : 0,
              bottom: 0,
            }}
            variants={menuVariants}
            initial={x.get() > width / 2 ? "closeRight" : "closeLeft"}
            animate={x.get() > width / 2 ? "openRight" : "openLeft"}
            exit={x.get() > width / 2 ? "closeRight" : "closeLeft"}
          >
            <nav className="h-full w-64 p-4 pt-5">
              {hamburgerMenuItems.map(({ name, path, id, icon }) => (
                <HamburgerLink
                  key={name}
                  name={name}
                  path={path}
                  id={id}
                  icon={icon}
                  cb={handleClick}
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;

"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useWindowSize } from "react-use";
import Link from "next/link";
import type { Route } from 'next';
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

const menuItems: Array<{ name: string; path: Route }> = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const HamburgerMenu = () => {
  const pathname = usePathname();

  const x = useMotionValue(0);
  const { width } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(x, "animationComplete", () => {
    const currentX = x.get();
    const halfOfScreen = width / 2;
    if (currentX < halfOfScreen) {
      x.set(0);
    } else {
      x.set(width - 70);
    }
  });

  const handleClick = () => setIsOpen(!isOpen);


  const isActive = (route: string) => {
    return route === pathname;
  };

  return (
    <div className="relative p-4">
      <motion.div
        className="hamburger absolute z-[2]"
        style={{ x }}
        drag={isOpen ? false : "x"}
        dragConstraints={{ left: 0, right: width - 70 }}
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
            <nav className="h-full w-64 p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={handleClick}
                  className={`${styles.menuItem} text-lg text-gray-800 block mt-4 ${isActive(item.path) ? "underline underline-offset-4" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;

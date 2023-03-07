import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

interface HamburgerLinkProps {
  id: number;
  name: string;
  icon: string;
  path: string;
  cb: () => void;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#0D47A1", "#FAF0CA", "#F4D35E", "#EE964B", "#F95738"];

export const HamburgerLink = ({
  id,
  name,
  icon,
  path,
  cb,
}: HamburgerLinkProps) => {
  const pathname = usePathname();

  const style = {
    border: `3px solid ${colors[id]}`,
    padding: "10px",
    borderRadius: "12px",
  };

  const isActive = (route: string) => {
    return route === pathname;
  };

  return (
    <motion.li
      className={styles.hamburgerLink}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={style}
    >
      <Link
        className={`${styles.hamburgerAnchorLink}`}
        href={path as Route}
        onClick={cb}
        style={
          isActive(path)
            ? {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: `${colors[id]}`,
              }
            : undefined
        }
      >
        <div>
          <span className={styles.hamburgerMenuIcon}>{icon}</span>
        </div>
        <div>
          <span>{name}</span>
        </div>
      </Link>
    </motion.li>
  );
};

export default HamburgerLink;

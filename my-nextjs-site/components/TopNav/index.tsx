"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";
import styles from "./styles.module.css";

const linkVariants = {
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

function TopNav() {
  let pathname = usePathname();

  if (pathname?.includes("/blog/")) {
    pathname = "/blog";
  }

  const isActive = (route: string) => {
    return route === pathname;
  };

  return (
    <>
      <div className={`w-[400px]`}>
        <nav
          id="topNav"
          className="z-[3] fixed flex-row hidden tablet:flex p-4 w-[400px]"
        >
          <ul className="flex pr-1 ml-4 w-full justify-between">
            <motion.li
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                className={`${styles.menuLink} ${
                  isActive("/") ? "underline underline-offset-4" : ""
                }`}
                href="/"
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                className={`${styles.menuLink} ${
                  isActive("/about") ? "underline underline-offset-4" : ""
                }`}
                href="/about"
              >
                About
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                className={`${styles.menuLink} ${
                  isActive("/skills") ? "underline underline-offset-4" : ""
                }`}
                href="/skills"
              >
                Skills
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                className={`${styles.menuLink} ${
                  isActive("/blog") ? "underline underline-offset-4" : ""
                }`}
                href="/blog"
              >
                Blog
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                className={`${styles.menuLink} ${
                  isActive("/contact") ? "underline underline-offset-4" : ""
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
      <div className="z-[3] flex fixed tablet:hidden">
        <HamburgerMenu />
      </div>
    </>
  );
}

export default TopNav;

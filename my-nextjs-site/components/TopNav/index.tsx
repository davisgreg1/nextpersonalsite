"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";

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
  tap: {
    scale: 0.9,
  },
};

function TopNav() {
  const pathname = usePathname();

  const isActive = (route: string) => {
    return route === pathname;
  };

  return (
    <>
      <nav id="topNav" className="z-[3] fixed flex-row hidden md:flex">
        <ul className="flex pr-1 pt-4">
          <motion.li
            className="px-4"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link className={`${isActive("/") ? "underline underline-offset-4" : ""}`} href="/">
              Home
            </Link>
          </motion.li>
          <motion.li
            className="px-4"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link className={`${isActive("/about") ? "underline underline-offset-4" : ""}`} href="/about">About</Link>
          </motion.li>
          <motion.li
            className="px-4"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link className={`${isActive("/skills") ? "underline underline-offset-4" : ""}`} href="/skills">Skills</Link>
          </motion.li>
          <motion.li
            className="px-4"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link className={`${isActive("/blog") ? "underline underline-offset-4" : ""}`} href="/blog">Blog</Link>
          </motion.li>
          <motion.li
            className="px-4"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link className={`${isActive("/contact") ? "underline underline-offset-4" : ""}`} href="/contact">Contact</Link>
          </motion.li>
        </ul>
      </nav>
      <div className="z-[3] flex fixed md:hidden">
        <HamburgerMenu />
      </div>
    </>
  );
}

export default TopNav;

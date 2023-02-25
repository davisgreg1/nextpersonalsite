"use client";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import snarkdown from "snarkdown";
import Link from "next/link";
import { BlogPostType } from "@/types";
import styles from "./style.module.css";
import { useState } from "react";

function BlogPost({ post }: { post: BlogPostType }) {
  const {
    fields: { excerpt },
    sys: { id },
  } = post;
  const date = dayjs(post.sys.createdAt).format("MMMM D, YYYY");
  const content = snarkdown(excerpt);

  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => setIsClicked(!isClicked);

  const handleLinkClick = () => setIsClicked(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={handleCardClick}
      style={{ position: "relative", userSelect: "none" }}
    >
      <div
        className={`m-4 w-[250px] h-[350px] bg-background ${styles.blogCard}`}
      >
        <div className="flex flex-col h-full justify-end items-start pb-[46px] px-4">
          <div className="grid place-items-start grid-rows-3 gap-4">
            <div className="text-[#a7aec7]">{date}</div>
            <span
              className="line-clamp-2"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div>
              <span>By:</span>{" "}
              <span className="text-[#a7aec7]">Gregory Davis</span>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{
                display: "inline-block",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                margin: "0 auto",
                zIndex: 1,
                fontSize: "1rem",
                fontWeight: "bold",
                letterSpacing: "0.1rem",
                color: "#fff",
                background: "#0d47a1",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
                width: "250px",
                border: "solid 1px #0d47a1",
                userSelect: "none",
              }}
            >
              <Link
                className="flex justify-center w-full outline-none user-select-none background-none shadow-none border-none cursor-pointer"
                onClick={handleLinkClick}
                href={`/blog/${id}`}
              >
                Read more
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default BlogPost;

"use client";
import { motion } from "framer-motion";
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

  const randomColor = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.85 }}
      onClick={handleCardClick}
      style={{ position: "relative", userSelect: "none" }}
    >
      <div
        className={`shadow-2xl m-4 w-[250px] h-[350px] ${styles.blogCard}`}
        style={{
          background: `linear-gradient(40deg, ${randomColor()} 30%, ${randomColor()} 100%)`,
        }}
      >
        <Link
          id="blog-link"
          className="flex justify-center w-[250px] h-full absolute outline-none user-select-none background-none shadow-none border-none cursor-pointer "
          onClick={handleLinkClick}
          href={`/blog/${id}`}
        />
        <div className="flex flex-col h-full justify-end items-start pb-[46px] px-4">
          <div className="grid place-items-start grid-rows-3 gap-4">
            <span
              className="line-clamp-2 text-shadow text-xl"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="absolute bottom-0 mb-4">
              <span className="text-shadow">By:</span>{" "}
              <span className="text-shadow">
                Gregory Davis
              </span>
              <div className="dark:text-[#a7aec7] text-shadow">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogPost;

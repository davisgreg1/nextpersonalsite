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

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={handleCardClick}
      style={{ position: "relative", userSelect: "none" }}
    >
      <div
        className={`m-4 w-[250px] h-[350px] bg-background ${styles.blogCard}`}
      >
        <Link
          id="blog-link"
          className="flex justify-center w-[250px] h-full absolute outline-none user-select-none background-none shadow-none border-none cursor-pointer "
          onClick={handleLinkClick}
          href={`/blog/${id}`}
        />
        <div className="flex flex-col h-full justify-end items-start pb-[46px] px-4">
          <div className="grid place-items-start grid-rows-3 gap-4">
            <div className="dark:text-[#a7aec7]">{date}</div>
            <span
              className="line-clamp-2"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div>
              <span>By:</span>{" "}
              <span className="dark:text-[#a7aec7]">Gregory Davis</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogPost;

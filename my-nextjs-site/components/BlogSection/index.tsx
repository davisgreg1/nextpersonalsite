"use client";
import React, { useState, useEffect } from "react";
import { fetchEntries } from "@/utils/contentfulPosts";
import BlogPost from "@/components/BlogPost";
import { BlogPostType } from "@/types";
import styles from "./style.module.css";
import { motion } from "framer-motion";

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const entries = await fetchEntries();
      setPosts(entries);
    };
    fetchData();
  }, []);

  const getRandomDirection = () => {
    return Math.random() < 0.5 ? "-50px" : "50px";
  };

  const blogPostVariants = {
    initial: { y: getRandomDirection(), opacity: 0 },
    animate: { y: "0px", opacity: 1 },
    bounce: { y: ["0px", "-20px", "0px"], transition: { duration: 0.2 } },
  };

  return (
    <section className={`m-10 h-full flex justify-center items-center`}>
      <div className="grid w-full grid-rows-2 gap-x-1 grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 place-items-center max-w-[60rem]">
        {posts.map((post: BlogPostType, index: number) => (
          <motion.div
            key={post.sys.id}
            className={`${styles.gridItem}`}
            variants={blogPostVariants}
            initial="initial"
            animate="animate"
            whileHover="bounce"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <BlogPost post={post} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

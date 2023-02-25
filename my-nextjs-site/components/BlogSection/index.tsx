import React, { use } from "react";
import { fetchEntries } from "@/utils/contentfulPosts";
import BlogPost from "@/components/BlogPost";
import { BlogPostType } from "@/types";
import styles from "./style.module.css";

const BlogSection = () => {
  const posts = use(fetchEntries());

  return (
    <section className={`m-10 h-full flex justify-center items-center`}>
      <div className="grid w-full grid-rows-2 gap-x-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center max-w-[60rem]">
        {posts.map((post: BlogPostType) => (
          <div key={post.sys.id} className={`${styles.gridItem}`}>
            <BlogPost post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

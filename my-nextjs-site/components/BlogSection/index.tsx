import React, { use } from "react";
import { fetchEntries } from "@/utils/contentfulPosts";
import BlogPost from "@/components/BlogPost";
import { BlogPostType } from "@/types";

function BlogSection() {
  const posts = use(fetchEntries());

  return (
    <section
      id="section-blog"
      className={`flex relative z-[1] h-screen flex-col snap-start section mx-4 py-8`}
    >
      {posts.map((post: BlogPostType) => (
        <BlogPost key={post.sys.id} post={post} />
      ))}
    </section>
  );
}

export default BlogSection;

import React, { useState, useEffect } from "react";
import fetchContentfulData from "@/utils/fetchContentfulData";

function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
      const CONTENTFUL_DELIVERY_TOKEN =
        process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;

      const blogs = await fetchContentfulData(
        CONTENTFUL_SPACE_ID,
        CONTENTFUL_DELIVERY_TOKEN
      );
      setBlogPosts(blogs);
    };

    fetchBlogPosts();
  }, []);

  return (
    <section
      id="section-blog"
      className={`flex relative z-10 h-screen flex-row justify-center snap-start section`}
    >
      Blog Section here
    </section>
  );
}

export default BlogSection;

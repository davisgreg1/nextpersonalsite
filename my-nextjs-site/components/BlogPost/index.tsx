"use client";
import ellipseText from "@/utils/ellipseText";
import snarkdown from "snarkdown";
import Link from "next/link";
import { BlogPostType } from "@/types";

function BlogPost({ post }: { post: BlogPostType }) {
  const {
    fields: { title, body },
    sys: { id },
  } = post;
  const content = snarkdown(body);

  const contentToDisplay = ellipseText(content, 200);

  return (
    <Link
      href={`/blog/${id}`}
      id="contentToDisplay"
      className="prose dark:text-black"
    >
      <span className="bg-white rounded-lg my-4">
        <span className="px-4 py-2">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </span>
        <span
          className="px-4 py-2"
          dangerouslySetInnerHTML={{ __html: contentToDisplay }}
        />
      </span>
    </Link>
  );
}

export default BlogPost;

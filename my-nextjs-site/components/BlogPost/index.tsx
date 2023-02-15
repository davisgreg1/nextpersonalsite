import snarkdown from "snarkdown";
import Link from "next/link";
import { BlogPostType } from "@/types";

function BlogPost({ post }: { post: BlogPostType }) {
  const {
    fields: { title, body, excerpt },
    sys: { id },
  } = post;
  const content = snarkdown(excerpt);

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
          className="px-4 py-2 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </span>
    </Link>
  );
}

export default BlogPost;

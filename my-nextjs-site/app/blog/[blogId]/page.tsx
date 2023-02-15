import { fetchEntry } from "@/utils/contentfulPosts";
import snarkdown from "snarkdown";
import { use } from "react";

type Params = {
  blogId: string;
};

const BlogPage = ({ params }: { params: Params }) => {
  const { blogId } = params;
  const post = use(fetchEntry(blogId));
  const { title, body } = post.fields;
  const content = snarkdown(body);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg my-4">
        <div className="px-4 py-2">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>
        <div className="px-4 py-2">
          <div className="dark:text-black" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  );
};

export default BlogPage;

import { fetchEntry } from "@/utils/contentfulPosts";
import snarkdown from "snarkdown";
import { use } from "react";
import styles from "./style.module.css";

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
      <div
        className={`bg-white dark:bg-black shadow-lg rounded-lg m-4 mt-24 overflow-scroll tablet:mt-24`}
      >
        <div className="px-4 py-2">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>
        <div className="h-full px-4 py-2 flex">
          <div
            className={`h-full w-full text-black prose lg:prose-xl ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;

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
        className={`bg-white dark:bg-black shadow-lg rounded-lg m-4 mt-36 overflow-scroll tablet:mt-36`}
      >
        <div className="px-4 py-2 flex justify-center">
          <h1 className="text-2xl font-bold dark:text-[#a7aec7] text-gray-800">{title}</h1>
        </div>
        <div className="h-full px-4 py-2 flex justify-center">
          <div
            className={`flex justify-center items-center h-full w-full text-black dark:text-[#a7aec7] prose lg:prose-xl ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;

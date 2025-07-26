import { fetchEntry } from "@/utils/contentfulPosts";
import snarkdown from "snarkdown";
import styles from "./style.module.css";

type Params = Promise<{
  blogId: string;
}>;

const BlogPage = async ({ params }: { params: Params }) => {
  const { blogId } = await params;
  const post = await fetchEntry(blogId);
  
  if (!post) {
    return (
      <div className="bg-white dark:bg-black shadow-lg rounded-lg m-4 mt-36">
        <div className="px-4 py-2 flex justify-center">
          <h1 className="text-2xl font-bold dark:text-[#a7aec7] text-gray-800">Post Not Found</h1>
        </div>
      </div>
    );
  }
  
  const { title, body } = post.fields;
  const content = snarkdown(String(body || ''));

  return (
    <>
      <div
        className={`bg-white dark:bg-black shadow-lg rounded-lg m-4 mt-36 overflow-scroll tablet:mt-36`}
      >
        <div className="px-4 py-2 flex justify-center">
          <h1 className="text-2xl font-bold dark:text-[#a7aec7] text-gray-800">{String(title || 'Untitled')}</h1>
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

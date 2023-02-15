import ellipseText from "@/utils/ellipseText";
import snarkdown from "snarkdown";

function BlogPost({ post }) {
  const content = snarkdown(post.fields.body);

  const contentToDisplay = ellipseText(content, 200);

  return (
    <div className="bg-white shadow-lg rounded-lg my-4">
      <div className="px-4 py-2">
        <h1 className="text-2xl font-bold text-gray-800">
          {post.fields.title}
        </h1>
      </div>
      <div className="px-4 py-2">
        <div id="contentToDisplay" className="prose">
          {contentToDisplay}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

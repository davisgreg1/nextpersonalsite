import "../../globals.css";
import { fetchEntry } from "@/utils/contentfulPosts";

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { blogId: string };
}) {
  const post = await fetchEntry(params.blogId);

  return {
    title: `${post.fields.title}`,
    description: post.fields.excerpt,
  };
}

export default function SpecificBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>
}

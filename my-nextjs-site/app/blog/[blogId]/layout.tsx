import "../../globals.css";
import { fetchEntry } from "@/utils/contentfulPosts";
import Link from "next/link";

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
  return (
    <>
      <Link className="absolute left-0 p-4 top-[70px]" href="/blog">
        ⏮️ Back to blog
      </Link>
      {children}
    </>
  );
}

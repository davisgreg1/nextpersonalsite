import "../../globals.css";
import { fetchEntry } from "@/utils/contentfulPosts";
import Link from "next/link";

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const resolvedParams = await params;
  const post = await fetchEntry(resolvedParams.blogId);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

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

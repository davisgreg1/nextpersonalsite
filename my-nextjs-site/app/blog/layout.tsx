import "../globals.css";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blog",
  description: "All my blogs!",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}

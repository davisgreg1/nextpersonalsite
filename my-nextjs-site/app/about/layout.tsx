import "../globals.css";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About",
  description: "All about me!",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

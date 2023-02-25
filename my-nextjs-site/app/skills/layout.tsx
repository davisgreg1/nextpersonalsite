import "../globals.css";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Skills",
  description: "All my skills!",
};

export default function SkillsLayout({
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

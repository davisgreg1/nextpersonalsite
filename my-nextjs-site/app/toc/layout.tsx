import "../globals.css";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Terms And Conditions",
  description: "Terms And Conditions!",
};

export default function TocLayout({
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

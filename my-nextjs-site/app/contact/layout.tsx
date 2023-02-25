import "../globals.css";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me!",
};

export default function ContactLayout({
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
